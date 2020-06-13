import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, ListGroup, ListGroupItem, TabContent, TabPane } from 'reactstrap';
import moment from 'moment';

import Logo from '../../../../components/UI/Logo/Logo';
import Room from '../../../../components/Chat/Room/Room';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

import './Chat.css';

class Chat extends Component {
    state = {
        search: '',

        activeTab: null,

        requests: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.requests && nextProps.backend.chat.requests) {
            return updateObject(prevState, { requests: nextProps.backend.chat.requests });
        }
        return prevState;
    }

    componentDidMount() {
        this.props.onGetRequestsWithMessages();
    }

    componentDidUpdate(prevProps) {
        if (this.props.backend.chat.requests && !prevProps.backend.chat.requests) {
            const channel = Echo.channel('public');
            channel.listen('RequestWithMessages', ({ id, message }) => {
                if (this.props.auth.token) {
                    const { requests } = this.state;
                    const index = requests.findIndex(request => +request.id === +id);
                    requests[index].messages.push(message);
                    this.setState({ requests });
                }
            });
        }
    }

    componentWillUnmount() {
        this.props.onResetChat();
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    selectTab = reqid => {
        this.setState({ activeTab: reqid });
    }

    render() {
        let { search, activeTab, requests } = this.state;
        const { backend: { chat: { loading } } } = this.props;

        let content;
        if (!requests) requests = [];

        if (loading) content = <CustomSpinner />;
        else {
            const filteredRequests = requests.filter(request => JSON.stringify(request).toLowerCase().includes(search.toLowerCase()));
            const listGroupItems = filteredRequests.map(request => <ListGroupItem action tag="button" key={'list-group-item-' + request.reqid} active={activeTab === request.reqid} className={activeTab === request.reqid ? "bg-white-80 border-soft" : undefined} onClick={() => this.selectTab(request.reqid)}>
                <div className="text-secondary mw-100 overflow-hidden">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{request.name}</h5>
                            <h6>{request.email}</h6>
                        </div>

                        <div className="text-x-small text-light">
                            {moment(request.messages[request.messages.length - 1].created_at).format('LLL')}
                        </div>
                    </div>

                    <div className="text-small text-truncate overflow-hidden" style={{ height: 20.8 }} dangerouslySetInnerHTML={{ __html: request.messages[request.messages.length - 1].content }} />
                </div>
            </ListGroupItem>);

            const tabPanes = requests.map(request => <TabPane tabId={request.reqid} key={'room-' + request.reqid} className="h-100">
                <Room active={request.reqid === activeTab} messages={[...request.messages]} request={request} />
            </TabPane>);

            content = <>
                <div className="SideBar h-100 d-flex flex-column border-right">
                    <div className="bg-soft border-bottom px-3 py-2">
                        <Input type="search" name="search" value={search} onChange={this.inputChangedHandler} className="rounded-pill" placeholder="Search a request" />
                    </div>

                    <div className="flex-fill bg-light" style={{ overflowY: 'auto' }}>
                        <ListGroup flush>
                            {listGroupItems}
                        </ListGroup>
                    </div>
                </div>

                {activeTab ? <TabContent className="flex-fill" activeTab={activeTab}>
                    {tabPanes}
                </TabContent> : <div className="bg-white-50 h-100 flex-fill d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <div className="text-x-large">Welcome to</div>
                            <div className="py-5">
                                <Logo />
                            </div>
                            <div className="text-darkblue text-x-large text-700">
                                Request <span className="text-orange">Chat</span>
                            </div>
                        </div>
                    </div>}
            </>;
        }

        return <div className="UserChat height-user d-flex overflow-hidden">
            {content}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onGetRequestsWithMessages: () => dispatch(actions.getRequestsWithMessages()),
    onResetChat: () => dispatch(actions.resetBChat()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));