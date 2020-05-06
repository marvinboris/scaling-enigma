import React from 'react';
import { Container, Navbar, Collapse, Nav } from 'reactstrap';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faComments } from '@fortawesome/free-regular-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuth, name, logoutHandler, role, cartItemsNumber, notifications, light = false, font }) => {
    return (
        <Collapse navbar>
            <Nav className="d-flex align-items-center" navbar>
                <NavigationItem font={font} icon={faHome} href="/">Home</NavigationItem>
                <NavigationItem font={font} icon={faEnvelope} exact={false} href="/request">Request</NavigationItem>
                <NavigationItem font={font} icon={faCommentDots} href="/forum">Forum</NavigationItem>
                <NavigationItem font={font} icon={faComments} href="/livechat">LiveChat</NavigationItem>
            </Nav>
        </Collapse>
    );
}

export default navigationItems;