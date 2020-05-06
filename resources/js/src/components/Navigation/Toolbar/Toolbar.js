import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, NavbarBrand, Navbar } from 'reactstrap';
import { faCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import NavigationItems from '../NavigationItems/NavigationItems';
import CenterButton from '../../UI/Button/CenterButton/CenterButton';
import Logo from '../../UI/Logo/Logo';

import './Toolbar.css';

const toolbar = ({ isAuth, name, drawerToggleClicked, logoutHandler, role, cartItemsNumber, notifications }) => (
    <div className="Toolbar bg-white sticky-top">
        <Container>
            <Navbar light className="border-bottom border-border-50 py-4" expand="md">
                <NavbarBrand><Logo /></NavbarBrand>

                <div className="pr-3 ml-auto d-flex align-items-center">
                    <NavigationItems />

                    <div className="pl-5">
                        <div className="d-inline-flex align-items-center">
                            <a href="#language-dropdown" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="language-dropdown" className="text-dark text-decoration-none d-flex justify-content-around align-items-center">
                                <span className="language-flag shadow-lg mr-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative">
                                    <span className="flag-icon position-absolute flag-icon-gb"></span>
                                </span>
                                <span className="px-2 border-left border-dark-20 position-relative">
                                    <span className="text-700">EN</span>
                                    <FontAwesomeIcon icon={faCircle} className="text-yellow text-xx-small position-absolute" style={{ left: 0, transform: 'translate(-50%, -50%)', top: '50%' }} />
                                </span>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </a>
                        </div>
                    </div>
                </div>
            </Navbar>
        </Container>
    </div>
);

export default toolbar;