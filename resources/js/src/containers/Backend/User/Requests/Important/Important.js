import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Spinner, Label, Input, Button, Badge, Form, FormGroup, CustomInput, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEnvelope, faTicketAlt, faTasks, faArrowsAlt, faTimes, faEye, faEdit, faTrash, faClock, faLandmark, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../../components/Backend/UI/List/List';
import Error from '../../../../../components/Error/Error';
import CustomSpinner from '../../../../../components/UI/CustomSpinner/CustomSpinner';
import WithTooltip from '../../../../../components/UI/WithTooltip/WithTooltip';
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Counter from '../../../../../components/Backend/UI/Counter/Counter';

import Edit from '../Edit';
import Description from '../Description';
import RequestView from '../View';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate } from '../../../../../shared/utility';

class Important extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        this.props.onGetImportantRequests();
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
                    const colors = ['orange', 'myprimary', 'red', 'green'];
                    const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
                    const icons = [faSpinner, faSpinner, faTimesCircle, faCheckCircle];

                    const country = countries.find(({ country }) => country === request.country);

                    const descriptionContent = <Description request={request} />;

                    const viewContent = <RequestView request={request} country={country} />;

                    const editContent = <Edit request={updateObject(request, { page_status: 'important' })} />;

                    return updateObject(request, {
                        ref: <div className="d-flex justify-content-between position-relative" style={{ minWidth: request.status === 1 ? 130 : 0 }}>
                            {request.ref}
                            <WithTooltip id={'request-' + request.reqid} content={request.edited_by}>
                                {request.status === 1 ?
                                    <Badge color={colors[request.status]} style={{ width: 70 }} className="position-static d-inline-block text-center ml-2">
                                        <Counter start={request.updated_at} />
                                    </Badge> :
                                    <Badge color={colors[request.status]} style={{ width: 20, height: 20 }} className="position-static p-0 ml-2 rounded-circle d-inline-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth />
                                    </Badge>}
                            </WithTooltip>
                        </div>,
                        created_at: convertDate(request.created_at),
                        status: <Badge color={colors[request.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth /> {texts[request.status]}</Badge>,
                        documents: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.documents.length} Document{request.documents.length > 1 ? 's' : ''}</Badge>,
                        attachment: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.issue_files.length} Attached File{request.issue_files.length > 1 ? 's' : ''}</Badge>,
                        description: <div className="d-flex">
                            <div style={{ maxWidth: 150 }} className="flex-fill text-truncate">{request.description}</div>
                            <View title={'Request description: ' + request.reqid} content={descriptionContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                            </View>
                        </div>,
                        action: <div className="text-center">
                            <View title={'Request details: ' + request.reqid} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Request edit: ' + request.reqid} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.onPostRequestDelete(request.id)}><FontAwesomeIcon icon={faTrash} className="text-red mr-2" fixedWidth /></Delete>
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
                            <List array={requestsData} data={JSON.stringify(requests)} bordered add="File a Request" link="/user/requests/add" icon={faCalendarAlt} title="Important Requests" className="bg-white shadow-sm"
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
                                    { name: 'Status', key: 'status', minWidth: 140 },
                                    { name: 'Action', key: 'action', fixed: true }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Important Requests" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>User panel</SpecialTitle>
                    <Subtitle user>Important Requests</Subtitle>
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
    onGetImportantRequests: () => dispatch(actions.getImportantRequests()),
    onPostRequestDelete: id => dispatch(actions.postRequestDelete(id)),
    onPostRequestUpdate: (id, data) => dispatch(actions.postRequestUpdate(id, data)),
    onResetRequests: () => dispatch(actions.resetRequests()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Important));