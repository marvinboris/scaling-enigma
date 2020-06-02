import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import AdminLogo from '../../../UI/Logo/Logo';

const Toolbar = ({ name, logoutHandler, logoWidth = 280, notifications, date, clock, toggle, pending = 0, processing = 0, solved = 0 }) => (
    <>
        <nav className="navbar navbar-expand-lg sticky-top bg-white p-0">
            <Link to="/" className="navbar-brand text-center d-none d-sm-flex justify-content-center align-items-center p-0 m-0 align-middle" style={{ flex: '0 0 ' + logoWidth + 'px', height: 70 }}><AdminLogo /></Link>
            <NavigationItems pending={pending} processing={processing} solved={solved} name={name} logoutHandler={logoutHandler} notifications={notifications} clock={clock} date={date} sidedrawerToggle={toggle} />
        </nav>
    </>
);

export default Toolbar;