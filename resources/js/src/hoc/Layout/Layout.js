import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner, Card, CardHeader, CardBody, Modal, ModalHeader, ModalBody, Button, } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Layout.css';
import Logo from '../../components/UI/Logo/Logo';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import BackendLayout from '../../containers/Backend/Layout';

import * as actions from '../../store/actions';
import { updateObject } from '../../shared/utility';


class Layout extends Component {
    state = {
        showSideDrawer: false,
        modal: false
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

    closeChatHandler = () => {
        const { onCloseChat } = this.props;
        onCloseChat();
    }

    toggle = () => this.setState(prevState => updateObject(prevState, { modal: !prevState.modal }))

    render() {
        const storedToken = localStorage.getItem('token');
        const chatToken = localStorage.getItem('chatToken');
        const { children, auth: { token, data } } = this.props;
        const { sideDrawerToggleHandler, logoutHandler, closeChatHandler, toggle } = this;
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
        else if (url.includes('user')) content = <BackendLayout>{children}</BackendLayout>;
        else if (url.includes('chat')) content = <Card className="mx-auto shadow vh-100 d-flex flex-column" style={{ maxWidth: 640 }}>
            <CardHeader className="d-flex align-items-center justify-content-between">
                <Link to="/" className="text-decoration-none"><Logo /></Link>

                {chatToken && <>
                    <FontAwesomeIcon icon={faPowerOff} onClick={toggle} size="lg" className="text-darkblue" style={{ cursor: 'pointer' }} />

                    <Modal isOpen={this.state.modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Close chat session</ModalHeader>
                        <ModalBody className="text-center">
                            <p>Are you sure you want to close this chat session?</p>
                            <div>
                                <Button color="darkblue" onClick={closeChatHandler}>Confirm <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                                <Button color="orange" onClick={toggle}>Cancel <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                            </div>
                        </ModalBody>
                    </Modal>
                </>}
            </CardHeader>

            <CardBody className="flex-fill">
                {children}
            </CardBody>
        </Card>;
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
    onAuthLogout: () => dispatch(actions.authLogout()),
    onCloseChat: () => dispatch(actions.chatClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);