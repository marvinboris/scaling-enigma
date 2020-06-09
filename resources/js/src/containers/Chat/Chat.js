import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Error from '../../components/Error/Error';

import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';

class Chat extends Component {


    render() {
        const { frontend: { chat: { loading, error, token, messages } } } = this.props;

        const redirect = !token && <Redirect to="/chat/entrance" />;

        let content;
        let errors;

        if (loading) content = <CustomSpinner />;
        else {
            errors = <Error err={error} />;

            if (messages) {
                content = <></>;
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

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));