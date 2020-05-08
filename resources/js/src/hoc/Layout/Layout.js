import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner, } from 'reactstrap';
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
        const { children, auth: { authPage, userPage, token, profile } } = this.props;
        const { sideDrawerToggleHandler, logoutHandler } = this;
        const { name, role, photo, notifications } = profile ? profile : { name: null, role: null, photo: null, notifications: null };

        if ((profile && storedToken) || !storedToken) {
            $('#guard').fadeOut(3000);
            setTimeout(() => {
                $('#guard').remove();
            }, 2800);
        }

        return (
            <>
                <div className="w-100 h-100 d-flex justify-content-center bg-white align-items-center" id="guard" style={{ position: 'fixed', top: 0, left: 0, zIndex: 10000 }}>
                    <Spinner style={{ width: '15rem', height: '15rem' }} color="danger" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Logo dark big /></div>
                </div>
                {authPage ? children : (
                    userPage ? (
                        <>
                            <BackendLayout>{children}</BackendLayout>
                        </>
                    ) : (
                            <>
                                <Toolbar isAuth={token !== null} name={name} notifications={notifications} role={role} logoutHandler={logoutHandler} drawerToggleClicked={sideDrawerToggleHandler} />
                                <main className="Content w-100 bg-white" style={{ overflowX: 'hidden' }}>
                                    {children}
                                </main>
                                <Footer />
                            </>
                        )
                )
                }
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(actions.authLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);