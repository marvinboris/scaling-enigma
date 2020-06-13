import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Input, Button, Col, Row, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import TextareaAutoResize from 'react-autosize-textarea';

import Error from '../../components/Error/Error';

import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';
import Message from '../../components/Chat/Message/Message';

import * as actions from '../../store/actions';
import { updateObject } from '../../shared/utility';

class Chat extends Component {
    state = {
        body: '',
        files: [],

        messages: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.frontend.chat.request && !prevState.messages) return updateObject(prevState, { messages: nextProps.frontend.chat.request.messages });
        return prevState;
    }

    componentDidMount() {
        if (this.props.frontend.chat.request) {
            const { token, request } = this.props.frontend.chat;
            const channel = Echo.channel('public');
            channel.listen('RequestWithMessages', ({ id, message }) => {
                if (token && +request.id === id) {
                    const messages = [...request.messages, message];
                    this.setState({ messages });
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.frontend.chat.request && (this.state.messages.length !== prevState.messages.length)) this.scrollToEnd();
    }

    inputChangedHandler = e => {
        const { name, value, files, type } = e.target;
        if (type === 'file') this.setState({ files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmitMessage(e.target, this.scrollToEnd);
    }

    onKeyDown = e => {
        const chatToken = localStorage.getItem('chatToken');
        if (+e.which === 13) {
            e.preventDefault();
            this.props.onSubmitMessage(document.getElementById('form-' + chatToken), this.scrollToEnd);
            this.setState({ body: '' }, () => {
                document.getElementById('files').value = "";
            });
        }
    }

    scrollToEnd = () => {
        const chatToken = localStorage.getItem('chatToken');
        const scrollingZone = document.getElementById('scrolling-' + chatToken);
        scrollingZone.scrollTop = scrollingZone.scrollHeight;
    }

    render() {
        let { body, messages } = this.state;
        const { auth: { token }, frontend: { chat: { loading, error, token: chatToken, request } } } = this.props;

        const redirect = !chatToken && <Redirect to="/chat/entrance" />;

        let content;
        let errors;

        if (loading) content = <CustomSpinner />;
        else {
            errors = <Error err={error} />;

            if (request) {
                if (!messages) messages = [];

                const { status } = request;
                const messagesContent = messages.map((message, index) => {
                    const right = (token && message.from !== 'client') || (!token && message.from === 'client');

                    return <Message key={JSON.stringify(message)} right={right} content={message.content} created_at={message.created_at} next_created_at={(messages.length - 1 > index) && messages[index + 1].created_at} files={message.files} />;
                });

                content = <div className="h-100 d-flex flex-column overflow-hidden">
                    <div id={"scrolling-" + chatToken} className="flex-fill p-3 bg-soft-50" style={{ overflowY: 'auto' }}>
                        {messagesContent}
                        {status > 1 && <>
                            <hr />
                            <Alert color={[null, null, 'danger', 'success'][status]} className="text-center">{[null, null, 'Cancelled', 'Solved'][status]} on <span className="text-700">{moment(this.props.request.updated_at).format('LLL')}</span></Alert>
                        </>}
                    </div>

                    <Row className="border-top">
                        <Form id={"form-" + chatToken} onSubmit={this.submitHandler} className="col-12 pt-3 d-flex align-items-end">
                            <TextareaAutoResize disabled={status > 1} id={"textarea-" + chatToken} onKeyDown={this.onKeyDown} name="body" className="form-control" value={body} placeholder="Type a message" onChange={this.inputChangedHandler} rows={1} />
                            <input type="file" disabled={status > 1} className="d-none" id="files" onChange={this.inputChangedHandler} multiple name="files[]" accept=".pdf,.jpg,.jpeg,.png" />
                            <div className="pl-3">
                                <Button type="button" color="soft" disabled={status > 1} className="rounded-pill" onClick={status > 1 ? undefined : (() => document.getElementById("files").click())}>
                                    <FontAwesomeIcon icon={faPaperclip} />
                                </Button>
                            </div>
                        </Form>
                    </Row>
                </div>;
            }
        }

        return <>
            {redirect}
            {errors}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onSubmitMessage: (data, cb) => dispatch(actions.submitMessage(data, cb)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));