import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Toolbar from '../../components/Backend/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../store/actions';
import { updateObject } from '../../shared/utility';

import './BackEnd.css';

class BackEnd extends Component {
    state = {
        isOpen: false,

        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: null, minutes: null, seconds: null },

        selectedItem: '',

        interval: null,

        pending: 0,
        processing: 0,
        cancelled: 0,
        solved: 0,

        total: 0,

        notifications: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.data.notifications && !prevState.notifications) {
            const { pending, processing, cancelled, solved, total, notifications } = nextProps.auth.data;
            return updateObject(prevState, { pending, processing, cancelled, solved, total, notifications });
        }
        return prevState;
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

    componentDidUpdate(prevProps) {
        if (this.props.auth.data.notifications && !prevProps.auth.data.notifications) {
            const audio = new Audio('/audio/swiftly.mp3');
            const channel = Echo.channel('public');
            channel.listen('Requests', ({ pending, processing, cancelled, solved, total }) => {
                if (
                    this.props.auth.token && (
                        pending !== this.state.pending ||
                        processing !== this.state.processing ||
                        cancelled !== this.state.cancelled ||
                        solved !== this.state.solved
                    )
                ) {
                    if (total !== this.state.total) audio.play();
                    this.setState({ pending, processing, cancelled, solved, total });
                }
            });
        }
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

    selectItem = item => this.setState({ selectedItem: item });


    render() {
        const { isOpen, date, clock, selectedItem, pending, processing, cancelled, solved, notifications } = this.state;
        const {
            auth: { loading, data: { name, photo } },
            history, children } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        if (!isAuthenticated) history.push('/login');

        return <div className="BackEnd text-left">
            <Toolbar pending={pending} processing={processing} cancelled={cancelled} solved={solved} notifications={notifications} name={name} toggle={this.toggle} logoutHandler={this.logoutHandler} date={date} clock={clock} />
            <SideDrawer name={name} isOpen={isOpen} photo={photo} toggle={this.toggle} selectItem={this.selectItem} selectedItem={selectedItem} />

            <main className="bg-soft position-relative full-height-user pb-5">
                <div className="mb-5 pb-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className="position-absolute d-none d-sm-block py-3 px-4 bg-brokenblue text-white">
                    <strong className="text-orange text-large">&copy;</strong> Copyright {new Date().getFullYear()} <strong><Link to="/" className="text-white">GIT Request Management System</Link></strong>. All rights reserved by <strong className="text-orange">GIT Developers</strong>.
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