import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Collapse, Nav, UncontrolledDropdown, DropdownToggle, Badge, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faPowerOff, faTimes, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// import NavigationItem from './NavigationItem/NavigationItem';
// import MyDropdownItem from '../../../Navigation/NavigationItems/DropdownItem/DropdownItem';

export default ({ name, sidedrawerToggle, logoutHandler, role, pending = [], processing = [], solved = [], date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return <div className="px-3 bg-nightblue flex-fill d-flex align-items-center text-white text-large position-relative" style={{ height: 70 }}>
        <Nav className="mr-auto d-flex align-items-center" navbar>
            <FontAwesomeIcon icon={faBars} className="mr-3 mr-md-5 ml-2 ml-md-4" style={{ cursor: 'pointer' }} onClick={sidedrawerToggle} size="2x" />
            <div className="mr-4 d-none d-md-block">
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                <span className="text-300">Today is</span> <strong>{weekDay} {day} {month} {year}</strong>
            </div>
            <div className="d-none d-md-block">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <strong>TIME : {hours} : {minutes} : {seconds}</strong>
            </div>
            <div className="py-3 d-none d-md-flex align-items-center position-absolute" style={{ left: 650 }}>
                <Link className="position-relative" to="/user/requests/pending">
                    <Button color="orange" className="d-inline-flex align-items-center rounded-2 mr-3"><span className="mr-2">Pending</span><FontAwesomeIcon icon={faSpinner} className="fa-spin" /></Button>
                    <Badge color="orange" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center border border-white border-1" style={{ width: 20, height: 20, transform: 'translate(-25px, -10px)', zIndex: 2 }}>{pending.length}</Badge>
                </Link>
                <Link className="position-relative" to="/user/requests/pending">
                    <Button color="blue" className="d-inline-flex align-items-center rounded-2 mr-3"><span className="mr-2">Processing</span><FontAwesomeIcon icon={faSpinner} className="fa-spin" /></Button>
                    <Badge color="blue" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center border border-white border-1" style={{ width: 20, height: 20, transform: 'translate(-25px, -10px)', zIndex: 2 }}>{pending.length}</Badge>
                </Link>
                <Link className="position-relative" to="/user/requests/solved">
                    <Button color="green" className="d-inline-flex align-items-center rounded-2 mr-3"><span className="mr-2">Solved</span><FontAwesomeIcon icon={faCheckCircle} /></Button>
                    <Badge color="green" className="position-absolute rounded-circle d-inline-flex justify-content-center align-items-center border border-white border-1" style={{ width: 20, height: 20, transform: 'translate(-25px, -10px)', zIndex: 2 }}>{pending.length}</Badge>
                </Link>
            </div>
        </Nav>
        <div className="ml-auto d-flex align-items-center">
            <div onClick={toggle} style={{ cursor: 'pointer' }} className="d-flex align-items-center ml-md-5">
                <span className="d-none d-md-inline">Sign out</span>
                <FontAwesomeIcon icon={faPowerOff} size="lg" className="ml-2" />
            </div>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Logout</ModalHeader>
            <ModalBody className="text-center">
                <p>Are you sure you want to logout?</p>
                <div>
                    <Button color="darkblue" onClick={logoutHandler}>Logout <FontAwesomeIcon icon={faPowerOff} fixedWidth /></Button>{' '}
                    <Button color="orange" onClick={toggle}>Close <FontAwesomeIcon icon={faTimes} fixedWidth /></Button>
                </div>
            </ModalBody>
        </Modal>
    </div>;
}