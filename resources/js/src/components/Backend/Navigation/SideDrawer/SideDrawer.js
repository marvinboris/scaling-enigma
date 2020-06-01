import React from 'react';
import { Col, Badge, ButtonGroup, Button, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserTie, faCalendarAlt, faEnvelope, faTasks, faCog, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import SideDrawerItem from './SideDrawerItem/SideDrawerItem';
import './SideDrawer.css';

const roles = {
    user: 'System User',
    admin: 'Administrator'
};

export default ({ name, messages = [], photo = "https://placehold.it/100x100", role = 'user', toggle, isOpen, selectItem, selectedItem }) => {
    let addOns = null;
    let sideDrawerItems = null;
    switch (role) {
        case 'user':
            sideDrawerItems = <>
                <SideDrawerItem id="Dashboard" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faTachometerAlt} href="/user/dashboard">Dashboard</SideDrawerItem>
                <SideDrawerItem id="Request Report" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faUserTie} href="/user/request-report">Request Report</SideDrawerItem>
                <SideDrawerItem id="Request Check" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCalendarAlt} dropdown path="/user/requests" items={[
                    { link: '/user/requests/file', text: 'File a Request' },
                    { link: '/user/requests/pending', text: 'Pending Requests' },
                    { link: '/user/requests/solved', text: 'Solved Requests' },
                    { link: '/user/requests/cancelled', text: 'Cancelled Requests' },
                ]}>Request Check</SideDrawerItem>
                <SideDrawerItem id="System Settings" sideDrawerToggle={toggle} select={selectItem} selected={selectedItem} icon={faCog} dropdown path="/user/settings" items={[
                    { link: '/user/settings/cms', text: 'CMS' },
                    { link: '/user/settings/language', text: 'Language Settings' },
                ]}>System Settings</SideDrawerItem>
            </>;
            break;

        case 'admin':
            sideDrawerItems = <>
                <SideDrawerItem icon={faTachometerAlt} href="/admin/dashboard">Dashboard</SideDrawerItem>
                <SideDrawerItem icon={faUserTie} dropdown path="/admin/finances" items={[
                    { link: '/admin/finances/sales-report', text: 'Sales Report' },
                    { link: '/admin/finances/limo-payments', text: 'Limo Payments' },
                    { link: '/admin/finances/credits/add', text: 'Add Credit' },
                    { link: '/admin/finances/credits', text: 'Credit List' },
                ]}>Finances</SideDrawerItem>
                <SideDrawerItem icon={faCalendarAlt} dropdown path="/admin/users" items={[
                    { link: '/admin/users/add', text: 'Add User' },
                    { link: '/admin/users', text: 'User List' },
                ]}>Users</SideDrawerItem>
                <SideDrawerItem icon={faEnvelope} href="/following">Contact us<Badge color="green" className="position-relative rounded-circle text-x-small text-700 d-inline-flex justify-content-center align-items-center" style={{ width: 18, height: 18, top: -7, transform: 'translateX(-40px)' }}>12</Badge></SideDrawerItem>
                <SideDrawerItem icon={faTasks} dropdown path="/admin/plans" items={[
                    { link: '/admin/plans/add', text: 'Add Plan' },
                    { link: '/admin/plans', text: 'Plan List' },
                    { link: '/admin/plans/deposit', text: 'Plan Deposit' },
                ]}>Subscription Plan</SideDrawerItem>
            </>;
            break;

        default:
            break;
    }

    return (
        <Collapse isOpen={isOpen} className="SideDrawer nav-left-sidebar bg-nightblue border-right border-darkblue text-white position-fixed d-md-block" style={{ width: 280 }}>
            <div className="menu-list">
                <Col xs={12}>
                    <div className="py-3 align-items-center border-top border-bottom border-white-20">
                        <Col xs={12} className="px-2 position-relative d-flex justify-content-center">
                            <div className="border-3 border-orange d-flex justify-content-center align-items-center border rounded-circle" style={{ width: 84, height: 84 }}>
                                <img src={photo} className="rounded-circle" style={{ width: 64, height: 64, objectFit: 'cover', objectPosition: 'center' }} alt="User profile" />
                            </div>

                            <FontAwesomeIcon icon={faEdit} className="position-absolute text-orange" size="2x" style={{ top: 0, right: 0 }} />
                        </Col>
                        <Col xs={12} className="p-0 h-100">
                            <div className="align-items-center text-center m-0 h-100">
                                <Col xs={12} className="p-0 text-large mb-3">
                                    <strong>{name}</strong>

                                    <div className="d-flex justify-content-center position-relative">
                                        <div className="border-bottom border-border" style={{ width: 100 }} />

                                        <div className="bg-orange border rounded-circle border-white position-absolute" style={{ width: 10, height: 10, bottom: 0, left: '50%', transform: 'translate(-50%, 50%)' }} />
                                    </div>
                                </Col>
                                {addOns}
                                <Col xs={12} className="p-0 text-green text-300 small">
                                    <FontAwesomeIcon fixedWidth icon={faCheckCircle} size="sm" className="mr-1" />{roles[role]}
                                </Col>
                            </div>
                        </Col>
                    </div>
                </Col>
                <nav className="navbar navbar-expand navbar-dark py-0 px-0 mt-5">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 flex-column">
                            {sideDrawerItems}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="backdrop w-100 bg-nightblue-50 position-fixed d-md-none" onClick={toggle} style={{ top: 70, zIndex: -1 }} />
        </Collapse>
    )
};