import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate } from '../../../../../shared/utility';

class Pending extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (!this.props.auth.userPage) this.props.onUserPageOn();
        const { onGetAdminDashboard } = this.props;
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        await this.setState({ countries });
        // onGetAdminDashboard();
    }

    render() {
        // let { backend: { finances: { loading, error, deposits } } } = this.props;

        const
            loading = false,
            error = null,
            pendingRequests = [
                {
                    name: 'James DOE',
                    platform: 'Liyeplimal',
                    issue: 'Verification',
                },
                {
                    name: 'Jakei DOGAO',
                    platform: 'Simbcoin',
                    issue: 'Verification',
                },
                {
                    name: 'Fialia Jaile',
                    platform: 'Liyeplimal',
                    issue: 'Withdraw',
                },
                {
                    name: 'Jamkea Aodi',
                    platform: 'Liyeplimal',
                    issue: 'Withdraw',
                },
                {
                    name: 'Miake Oeda',
                    platform: 'Simbcoin',
                    issue: 'Payout',
                },
            ];

        const { countries } = this.state;
        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (pendingRequests) {
                const pendingRequestsData = pendingRequests.map(request => {
                    const colors = ['orange', 'danger', 'success'];
                    const texts = ['Pending', 'Failed', 'Success'];
                    const icons = [faSpinner, faTimesCircle, faCheckCircle];
                    const country = countries.find(country => country.country === 'CM');
                    return updateObject(request, {
                        created_at: convertDate(new Date()),
                        status: <Badge color={colors[0]} className="badge-block position-static"><FontAwesomeIcon icon={icons[0]} className={0 === 0 ? "fa-spin" : ""} fixedWidth /> {texts[0]}</Badge>,
                        documents: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {4} Documents</Badge>,
                        attachment: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {2} Attached Files</Badge>,
                        description: <div className="d-flex">
                            <div className="flex-fill text-truncate">I tried to verify...</div>
                            <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                        </div>,
                        ref: 'FCG434',
                        country: 'CM',
                        email: 'demo@test.com',
                        phone: '+2379843400534',
                        action: <div className="text-center">
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faEdit} className="text-brokenblue mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faDownload} className="text-darkblue" fixedWidth />
                        </div>,
                        country: <div className="d-flex align-items-center">
                            <div className="border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2" style={{ width: 20, height: 20 }}>
                                <span className={`flag-icon text-large position-absolute flag-icon-${'CM'.toLowerCase()}`} />
                            </div>

                            {country ? country.name : null}
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={pendingRequestsData} bordered add="File a Request" icon={faCalendarAlt} title="Pending Requests" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'User ID', key: 'ref' },
                                    { name: 'Full Name', key: 'name' },
                                    { name: 'Platform', key: 'platform' },
                                    { name: 'E-Mail', key: 'email' },
                                    { name: 'Country', key: 'country' },
                                    { name: 'Phone Number', key: 'phone' },
                                    { name: 'Issue', key: 'issue' },
                                    { name: 'User Documents', key: 'documents', minWidth: 150 },
                                    { name: 'Description', key: 'description' },
                                    { name: 'Attached Files', key: 'attachment', minWidth: 180 },
                                    { name: 'Status', key: 'status', minWidth: 130 },
                                    { name: 'Action', key: 'action' }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Pending Requests" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>User panel</SpecialTitle>
                    <Subtitle user>Pending Requests</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    // onGetAdminDashboard: () => dispatch(actions.getAdminDashboard()),
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOn: () => dispatch(actions.userPageOn()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pending));