import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Home from './containers/Home/Home';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// User routes
const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));
const asyncUserChat = asyncComponent(() => import('./containers/Backend/User/Chat/Chat'));
const asyncUserRequestReport = asyncComponent(() => import('./containers/Backend/User/RequestReport/RequestReport'));
const asyncUserRequestsImportant = asyncComponent(() => import('./containers/Backend/User/Requests/Important/Important'));
const asyncUserRequestsProcessing = asyncComponent(() => import('./containers/Backend/User/Requests/Processing/Processing'));
const asyncUserRequestsPending = asyncComponent(() => import('./containers/Backend/User/Requests/Pending/Pending'));
const asyncUserRequestsSolved = asyncComponent(() => import('./containers/Backend/User/Requests/Solved/Solved'));
const asyncUserRequestsCancelled = asyncComponent(() => import('./containers/Backend/User/Requests/Cancelled/Cancelled'));

// Common routes
const asyncRequestCheck = asyncComponent(() => import('./containers/Request/Check/Check'));
const asyncRequestSuccess = asyncComponent(() => import('./containers/Request/Success/Success'));
const asyncRequest = asyncComponent(() => import('./containers/Request/Request'));
const asyncChatVerify = asyncComponent(() => import('./containers/Chat/Verify/Verify'));
const asyncChatEntrance = asyncComponent(() => import('./containers/Chat/Entrance/Entrance'));
const asyncChat = asyncComponent(() => import('./containers/Chat/Chat'));
const asyncLogin = asyncComponent(() => import('./containers/Auth/Login/Login'));
const asyncVerify = asyncComponent(() => import('./containers/Auth/Verify/Verify'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onTryChat } = this.props;
        onTryAuthSignup();
        onTryChat();
        init();
    }

    render() {
        const { auth: { token } } = this.props;

        let routes = (
            <Switch>
                <Route path="/auth/verify" component={asyncVerify} />
                <Route path="/auth/login" component={asyncLogin} />
                <Redirect path="/auth" to="/auth/login" />
                <Redirect path="/login" to="/auth/login" />

                <Route path="/chat/verify" component={asyncChatVerify} />
                <Route path="/chat/entrance" component={asyncChatEntrance} />
                <Route path="/chat" component={asyncChat} />

                <Route path="/request/check" component={asyncRequestCheck} />
                <Route path="/request/success" component={asyncRequestSuccess} />
                <Route path="/request" component={asyncRequest} />

                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        if (token !== null) {
            routes = (
                <Switch>
                    <Route path="/user/dashboard" component={asyncUserDashboard} />
                    <Route path="/user/chat" component={asyncUserChat} />
                    <Route path="/user/request-report" component={asyncUserRequestReport} />
                    <Route path="/user/requests/important" component={asyncUserRequestsImportant} />
                    <Route path="/user/requests/processing" component={asyncUserRequestsProcessing} />
                    <Route path="/user/requests/pending" component={asyncUserRequestsPending} />
                    <Route path="/user/requests/solved" component={asyncUserRequestsSolved} />
                    <Route path="/user/requests/cancelled" component={asyncUserRequestsCancelled} />
                    <Redirect path="/auth" to="/user/dashboard" />
                    <Redirect path="/login" to="/user/dashboard" />

                    <Route path="/chat" component={asyncChat} />
                    <Route path="/request/check" component={asyncRequestCheck} />
                    <Route path="/request/success" component={asyncRequestSuccess} />
                    <Route path="/request" component={asyncRequest} />
                    <Route path="/" component={Home} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(actions.authCheckState()),
    onTryChat: () => dispatch(actions.chatCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
