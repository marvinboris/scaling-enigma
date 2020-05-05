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
const asyncAboutUs = asyncComponent(() => import('./containers/AboutUs/AboutUs'));
const asyncContact = asyncComponent(() => import('./containers/Contact/Contact'));
const asyncLogin = asyncComponent(() => import('./containers/Auth/Login/Login'));
const asyncSignup = asyncComponent(() => import('./containers/Auth/Signup/Signup'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup } = this.props;
        onTryAuthSignup();
        init();
    }

    render() {
        const { auth: { profile, token } } = this.props;
        const role = profile ? profile.role : null;

        let routes = (
            <Switch>
                <Route path="/signup" component={asyncSignup} />
                <Route path="/login" component={asyncLogin} />
                <Route path="/contact" component={asyncContact} />
                <Route path="/about-us" component={asyncAboutUs} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        if (token !== null && profile) {
            routes = (
                <Switch>
                    <Route path="/contact" component={asyncContact} />
                    <Route path="/about-us" component={asyncAboutUs} />
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
