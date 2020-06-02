import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faFilePdf, faFileImage, faUser, faBook, faSpinner, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Edit from '../Requests/Edit';

import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Table from '../../../../components/Backend/UI/Table/Table';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import View from '../../../../components/Backend/UI/View/View';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import Download from '../../../../components/Backend/UI/Download/Download';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate } from '../../../../shared/utility';

// Images
import FinanceTracker from '../../../../assets/images/Group 676@2x.png';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

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
        let { backend: { dashboard: { loading, error, blocksData, requests } } } = this.props;

        const { countries } = this.state;
        let content = null;
        let errors = null;
        
        const colors = ['orange', 'blue', 'red', 'green'];
        const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
        const icons = [faSpinner, faSpinner, faTimesCircle, faCheckCircle];

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (requests && blocksData) {
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

                const requestsData = requests.map(request => {
                    const country = countries.find(({ country }) => country === request.country);

                    const documentsContent = request.documents.filter(d => d).map(doc => {
                        const arr1 = doc.split('.');
                        const format = arr1[arr1.length - 1];

                        const arr2 = doc.split('/');
                        const arr3 = arr2[arr2.length - 1].split('.');
                        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');


                        let content;
                        switch (format.toLowerCase()) {
                            case 'pdf':
                                content = <FontAwesomeIcon icon={faFilePdf} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                                break;
                            default:
                                content = <div className="embed-responsive embed-responsive-1by1 position-absolute" style={{ background: 'url("' + doc + '") no-repeat center', backgroundSize: 'cover', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                                break;
                        }

                        return <Col xl={3} key={formatlessName + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
                            <a target="_blank" href={doc} className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                                {content}
                            </a>
                            <Download link={doc} name={formatlessName + '.' + format}>
                                <div className="text-uppercase text-truncate pt-3 text-darkblue">
                                    {formatlessName}
                                </div>
                            </Download>
                        </Col>
                    });

                    const issueFilesContent = request.issue_files.filter(d => d).map(issue_file => {
                        const arr1 = issue_file.split('.');
                        const format = arr1[arr1.length - 1];

                        const arr2 = issue_file.split('/');
                        const arr3 = arr2[arr2.length - 1].split('.');
                        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');

                        let icon;
                        switch (format.toLowerCase()) {
                            case 'pdf':
                                icon = faFilePdf
                                break;
                            default:
                                icon = faFileImage
                                break;
                        }

                        return <div key={formatlessName + Math.random()} className="pr-3 d-inline-block" style={{ maxWidth: 200 }}>
                            <Download link={issue_file} name={formatlessName + '.' + format}>
                                <div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-truncate text-nowrap">
                                    <FontAwesomeIcon icon={icon} className="mr-2" />{formatlessName}
                                </div>
                            </Download>
                        </div>
                    });

                    const viewContent = <>
                        <Row className="m-0 p-3 rounded bg-green-20">
                            <Col xs={12}>
                                <div className="text-green text-700 mb-2">
                                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                                        User info Gathering
                                    </div>
                                <hr />
                            </Col>
                            <I label="Full Name">{request.name}</I>
                            <I label="Platform">{request.platform}</I>
                            <I label="E-Mail Address">{request.email}</I>
                            <I label="User ID">{request.ref}</I>
                            <I label="Country">{country ? country.name : null}</I>
                            <I label="Phone Number">{request.phone}</I>
                            <I label="Issue">{request.issue}</I>
                        </Row>

                        <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
                            <Col xs={12}>
                                <div className="text-orange text-700 mb-2">
                                    <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                                        User documents
                                    </div>
                                <hr />
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    {documentsContent}
                                </Row>
                            </Col>
                        </Row>

                        <Row className="mt-4 mx-0 p-3 rounded bg-soft">
                            <Col xs={12}>
                                <div className="text-black text-700 mb-2">
                                    <FontAwesomeIcon icon={faEdit} className="mr-2" fixedWidth />
                                        Issue description
                                    </div>
                                <hr />
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={12} className="pb-3">{request.description}</Col>
                                    <Col xl={12}>{issueFilesContent}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </>;

                    const editContent = <Edit request={updateObject(request, { page_status: 'dashboard' })} />;

                    return updateObject(request, {
                        ref: <span>{request.ref}<Badge color={colors[request.status]} style={{ width: 20, height: 20 }} className="position-static p-0 ml-2 rounded-circle d-inline-flex justify-content-center align-items-center"><FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth /></Badge></span>,
                        country: <div className="d-flex align-items-center">
                            <div className="border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2" style={{ width: 20, height: 20 }}>
                                <span className={`flag-icon text-large position-absolute flag-icon-${request.country.toLowerCase()}`} />
                            </div>

                            {country ? country.name : null}
                        </div>,
                        created_at: convertDate(request.created_at),
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