import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Error from '../../components/Error/Error';

import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';
import Message from '../../components/Chat/Message/Message';

import * as actions from '../../store/actions';

class Chat extends Component {
    render() {
        const { auth: { token }, frontend: { chat: { loading, error, token: chatToken, messages } } } = this.props;

        console.log(this.props.frontend.chat)
        const redirect = !chatToken && <Redirect to="/chat/entrance" />;

        let content;
        let errors;

        if (loading) content = <CustomSpinner />;
        else {
            console.log(this.props.frontend.chat)
            errors = <Error err={error} />;

            if (messages) content = messages.map(message => {
                const right = (token && message.from !== 'client') || (!token && message.from === 'client');

                return <Message key={JSON.stringify(message)} right={right} content={message.content} created_at={message.created_at} />;
            });
        }

        return <>
            {redirect}
            {errors}
            {content}
            <div>Yo</div>
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onResetChat: () => dispatch(actions.resetChat())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));