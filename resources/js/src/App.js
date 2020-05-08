import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Home from './containers/Home/Home';

import * as actions from './store/actions';

import 'aos/dist/aos.css';

// Common routes
const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));
const asyncUserRequestsPending = asyncComponent(() => import('./containers/Backend/User/Requests/Pending/Pending'));

// Common routes
const asyncRequestSuccess = asyncComponent(() => import('./containers/Request/Success/Success'));
const asyncRequest = asyncComponent(() => import('./containers/Request/Request'));
const asyncContact = asyncComponent(() => import('./containers/Contact/Contact'));
const asyncLogin = asyncComponent(() => import('./containers/Auth/Login/Login'));
const asyncSignup = asyncComponent(() => import('./containers/Auth/Signup/Signup'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        // onTryAuthSignup();
        init();
    }

    render() {
        // const { auth: { profile, token } } = this.props;
        const profile = { role: 'user' };
        const token = 'Token';
        const role = profile ? profile.role : null;

        let routes = (
            <Switch>
                <Route path="/signup" component={asyncSignup} />
                <Route path="/login" component={asyncLogin} />
                <Route path="/contact" component={asyncContact} />
                <Route path="/request/success" component={asyncRequestSuccess} />
                <Route path="/request" component={asyncRequest} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        if (token !== null && profile) {
            routes = (
                <Switch>
                    <Route path="/user/dashboard" component={asyncUserDashboard} />
                    <Route path="/user/requests/pending" component={asyncUserRequestsPending} />

                    <Route path="/contact" component={asyncContact} />
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
