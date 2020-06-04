import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Edit from '../Requests/Edit';
import RequestView from '../Requests/View';

import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Table from '../../../../components/Backend/UI/Table/Table';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import Counter from '../../../../components/Backend/UI/Counter/Counter';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate } from '../../../../shared/utility';

// Images
import FinanceTracker from '../../../../assets/images/Group 676@2x.png';
import WithTooltip from '../../../../components/UI/WithTooltip/WithTooltip';

class Dashboard extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        this.props.onGetDashboard();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        this.setState({ countries });
    }

    componentWillUnmount() {
        this.props.onResetDashboard();
    }

    render() {
        let { backend: { dashboard: { loading, error, blocksData, requests }, requests: { loading: requestsLoading, error: requestsError, requests: requestsRequests } } } = this.props;

        const { countries } = this.state;
        let content = null;
        let errors = null;

        const colors = ['orange', 'myprimary', 'red', 'green'];
        const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
        const icons = [faSpinner, faSpinner, faTimesCircle, faCheckCircle];

        if (loading || requestsLoading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
                <Error err={requestsError} />
            </>;
            if (requests && blocksData) {
                const mainRequests = requestsRequests ? requestsRequests : requests;
                const { totalRequests, pendingRequests, resolvedRequests, accomplishedRate } = blocksData;
                const data = [
                    {
                        title: 'Total Requests',
                        children: totalRequests,
                        icon: faClock,
                        link: '/user/requests/all/',
                        color: 'pink',
                        details: 'All system requests',
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'orange'
                    },
                    {
                        title: 'Pending Requests',
                        children: pendingRequests,
                        icon: faLandmark,
                        link: '/user/requests/pending/',
                        color: 'brokenblue',
                        details: 'Unresolved requests',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Resolved Requests',
                        children: resolvedRequests,
                        icon: faEnvelope,
                        link: '/user/requests/resolved',
                        color: 'orange',
                        details: 'Solved requests',
                        titleColor: 'white',
                        circleColor: 'orange',
                        circleBorder: 'white'
                    },
                    {
                        title: 'Accomplishment Rate',
                        children: accomplishedRate + '%',
                        icon: faTicketAlt,
                        link: '/user/',
                        color: 'green',
                        details: 'Below average',
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'white'
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link}>{children}</Card>);

                const requestsData = mainRequests.map(request => {
                    const country = countries.find(({ country }) => country === request.country);

                    const viewContent = <RequestView request={request} country={country} />;

                    const editContent = <Edit request={updateObject(request, { page_status: 'dashboard' })} />;

                    return updateObject(request, {
                        ref: <div className="d-flex justify-content-between position-relative" style={{ minWidth: request.status === 1 ? 130 : 0 }}>
                            {request.ref}
                            <WithTooltip id={'request-' + request.reqid} content={request.edited_by}>
                                {request.status === 1 ?
                                    <Badge color={colors[request.status]} className="position-static ml-2">
                                        <Counter start={request.created_at} />
                                    </Badge> :
                                    <Badge color={colors[request.status]} style={{ width: 20, height: 20 }} className="position-static p-0 ml-2 rounded-circle d-inline-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth />
                                    </Badge>}
                            </WithTooltip>
                        </div>,
                        created_at: convertDate(request.created_at),
                        country: <div className="d-flex align-items-center">
                            <div className="border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2" style={{ width: 20, height: 20 }}>
                                <span className={`flag-icon text-large position-absolute flag-icon-${request.country.toLowerCase()}`} />
                            </div>

                            {country ? country.name : null}
                        </div>,
                        action: <div className="text-center">
                            <View title={'Request details: ' + request.reqid} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Request edit: ' + request.reqid} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.onPostRequestDelete(request.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            {cards}
                        </Row>

                        <Row className="mt-5">
                            <Table array={requestsData} draggable closable title="Today's Requests" icon={faTasks} bordered limit={5} lg={6} className="bg-white shadow-sm"
                                fields={[
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'User ID', key: 'ref' },
                                    { name: 'Full Name', key: 'name' },
                                    { name: 'Platform', key: 'platform' },
                                    { name: 'E-Mail', key: 'email' },
                                    { name: 'Country', key: 'country' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/user/requests/pending" className="text-secondary">View full task list | ></Link>
                            </Table>

                            <Col lg={6} className="pt-3 pt-sm-0">
                                <div className="bg-brokenblue shadow-sm text-soft h-100 d-flex flex-column">
                                    <div className="p-3 border-bottom border-border text-700 position-relative d-flex">
                                        <span className="d-inline-flex align-items-center"><FontAwesomeIcon size="lg" className="text-orange mr-2" fixedWidth icon={faTasks} />Request Chart</span>

                                        <div className="ml-auto d-none d-lg-flex justify-content-end align-items-center text-soft position-absolute" style={{ top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                                            <FontAwesomeIcon icon={faArrowsAlt} size="lg" className="mr-3" />

                                            <FontAwesomeIcon icon={faTimes} size="2x" />
                                        </div>
                                    </div>

                                    <Row className="p-3 flex-fill d-flex flex-column justify-content-center">
                                        <Col xs={12} lg={11}>
                                            <img src={FinanceTracker} alt="Finance Tracker" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Dashboard" icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>User panel</SpecialTitle>
                    <Subtitle user>Dashboard</Subtitle>
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
    onGetDashboard: () => dispatch(actions.getDashboard()),
    onResetDashboard: () => dispatch(actions.resetDashboard()),

    onPostRequestDelete: id => dispatch(actions.postRequestDelete(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));