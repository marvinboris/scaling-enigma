import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, NavbarBrand, Navbar, Collapse, NavbarToggler, Button } from 'reactstrap';
import { faCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

export default ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="Toolbar bg-white sticky-top border-bottom border-border-50">
            <Container>
                <Navbar light className="py-4" expand="md">
                    <Link to="/" className="navbar-brand"><Logo /></Link>

                    <div className="pr-lg-3 ml-auto d-flex align-items-center">
                        <div className="d-none d-lg-block"><NavigationItems /></div>

                        <div className="pl-lg-5">
                            <div className="d-inline-flex align-items-center">
                                <a href="#language-dropdown" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="language-dropdown" className="text-dark text-decoration-none d-flex justify-content-around align-items-center">
                                    <span className="language-flag shadow-lg mr-2 overflow-hidden d-none d-lg-inline-flex justify-content-center align-items-center position-relative">
                                        <span className="flag-icon position-absolute flag-icon-gb"></span>
                                    </span>
                                    <span className="px-2 border-left border-dark-20 position-relative">
                                        <span className="text-700">EN</span>
                                        <FontAwesomeIcon icon={faCircle} className="text-yellow text-xx-small position-absolute" style={{ left: 0, transform: 'translate(-50%, -50%)', top: '50%' }} />
                                    </span>
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </a>

                                <NavbarToggler onClick={toggleNavbar} className="ml-3 d-lg-none" />
                            </div>
                        </div>

                        <div className="pl-lg-5">
                            <a href="skype:live:.cid.568f33d31f35e59d?call" className="text-decoration-none">
                                <Button color="primary" className="rounded-pill py-2 px-4 d-inline-flex align-items-center">
                                    <FontAwesomeIcon icon={faSkype} className="mr-2" size="lg" />
                                    <span className="text-small">Call</span>
                                </Button>
                            </a>
                        </div>
                    </div>
                </Navbar>
            </Container>
            <div className="d-lg-none">
                <Collapse isOpen={!collapsed} navbar>
                    <NavigationItems font="secondary" toggleNavbar={toggleNavbar} />
                </Collapse>
            </div>
        </div>
    );
}