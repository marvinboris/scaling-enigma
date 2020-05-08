import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Toolbar from '../../components/Backend/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../store/actions';

import './BackEnd.css';

class BackEnd extends Component {
    state = {
        isOpen: false,

        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: null, minutes: null, seconds: null },

        interval: null
    }

    componentDidMount() {
        const interval = setInterval(() => {
            const date = new Date();
            const twoDigits = number => number < 10 ? '0' + number : number;

            const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][date.getDay()];
            const day = date.getDate();
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
            const year = date.getFullYear();

            const hours = twoDigits(date.getHours());
            const minutes = twoDigits(date.getMinutes());
            const seconds = twoDigits(date.getSeconds());

            this.setState({ date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } });
        }, 1000);
        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const { isOpen, date, clock } = this.state;
        const { 
            // auth: { loading, data: { notifications, first_name, last_name, name, role, photo, ref, sponsor, credits } }, 
            onAuthLogout, children } = this.props;
        // const isAuthenticated = localStorage.getItem('token') !== null;

        const
            loading = false,
            notifications = [],
            name = 'Test Name',
            photo = "https://placehold.it/100x100",
            isAuthenticated = true;

        if (!isAuthenticated) onAuthLogout();

        return <div className="BackEnd text-left">
            <Toolbar notifications={notifications} name={name} toggle={this.toggle} logoutHandler={this.logoutHandler} date={date} clock={clock} />
            <SideDrawer name={name} isOpen={isOpen} photo={photo} />

            <main className="bg-soft position-relative full-height-user pb-5">
                <div className="mb-5 pb-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className="position-absolute d-none d-sm-block py-3 px-4 bg-brokenblue text-white">
                    <strong className="text-orange text-large">&copy;</strong> Copyright {new Date().getFullYear()} <strong><Link to="/" className="text-white">GIT Request Management System</Link></strong>. All rights reserved by <strong className="text-orange">Briluce Services</strong>.
                </footer>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BackEnd));