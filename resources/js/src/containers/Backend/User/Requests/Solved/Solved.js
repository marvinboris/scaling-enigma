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
import Feedback from '../../../../../components/Feedback/Feedback';

class Solved extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        this.props.onGetSolvedRequests();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        this.setState({ countries });
    }

    componentWillUnmount() {
        this.props.onResetRequests();
    }

    render() {
        let { backend: { requests: { loading, error, message, requests } } } = this.props;
        const { countries } = this.state;

        let content;
        let errors;
        let feedback;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (requests) {
                feedback = <Feedback message={message} />;

                const requestsData = requests.map(request => {
                    const colors = ['orange', 'primary', 'danger', 'success'];
                    const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
                    const icons = [faSpinner, faSpinner, faTimesCircle, faCheckCircle];
                    const country = countries.find(({ country }) => country === request.country);
                    return updateObject(request, {
                        created_at: convertDate(request.created_at),
                        platform: request.platform.name,
                        issue: request.issue.name,
                        status: <Badge color={colors[request.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth /> {texts[request.status]}</Badge>,
                        documents: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.documents.length} Document{request.documents.length > 1 ? 's' : ''}</Badge>,
                        attachment: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.issue_files.length} Attached File{request.issue_files.length > 1 ? 's' : ''}</Badge>,
                        description: <div className="d-flex">
                            <div style={{ maxWidth: 150 }} className="flex-fill text-truncate">{request.description}</div>
                            <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                        </div>,
                        action: <div className="text-center">
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faEdit} className="text-brokenblue mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth />
                            <FontAwesomeIcon icon={faDownload} className="text-darkblue" fixedWidth />
                        </div>,
                        country: <div className="d-flex align-items-center">
                            <div className="border border-1 border-white rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center mr-2" style={{ width: 20, height: 20 }}>
                                <span className={`flag-icon text-large position-absolute flag-icon-${request.country.toLowerCase()}`} />
                            </div>

                            {country ? country.name : null}
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={requestsData} data={JSON.stringify(requests)} bordered add="File a Request" link="/user/requests/add" icon={faCalendarAlt} title="Solved Requests" className="bg-white shadow-sm"
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
                    <Breadcrumb main="Solved Requests" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>User panel</SpecialTitle>
                    <Subtitle user>Solved Requests</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onGetSolvedRequests: () => dispatch(actions.getSolvedRequests()),
    onResetRequests: () => dispatch(actions.resetRequests()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Solved));