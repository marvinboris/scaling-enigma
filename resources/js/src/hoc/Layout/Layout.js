import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner, Card, CardHeader, CardBody, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import './Layout.css';
import Logo from '../../components/UI/Logo/Logo';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import BackendLayout from '../../containers/Backend/Layout';

import * as actions from '../../store/actions';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    render() {
        const storedToken = localStorage.getItem('token');
        const { children, auth: { token, data } } = this.props;
        const { sideDrawerToggleHandler, logoutHandler } = this;
        const { name, role, photo, notifications } = data ? data : { name: null, role: null, photo: null, notifications: null };

        if ((data && storedToken) || !storedToken) {
            $('#guard').fadeOut(3000);
            setTimeout(() => {
                $('#guard').remove();
            }, 2800);
        }

        const url = location.pathname;

        let content = null;
        if (url.includes('auth')) content = children;
        else if (url.includes('chat')) content = <Card className="mx-auto shadow vh-100 d-flex flex-column" style={{ maxWidth: 640 }}>
            <CardHeader>
                <Logo />
            </CardHeader>

            <CardBody className="flex-fill">
                {children}
            </CardBody>
        </Card>;
        else if (url.includes('user')) content = <BackendLayout>{children}</BackendLayout>;
        else content = <>
            <Toolbar isAuth={token !== null} name={name} notifications={notifications} role={role} logoutHandler={logoutHandler} drawerToggleClicked={sideDrawerToggleHandler} />
            <main className="Content px-3 px-lg-0 w-100 bg-white full-height-app" style={{ overflowX: 'hidden' }}>
                {children}
            </main>
            <Footer />
        </>;

        return content;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(actions.authLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);