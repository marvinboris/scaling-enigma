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
import Feedback from '../../../../../components/Feedback/Feedback';
import Delete from '../../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../../components/Backend/UI/View/View';
import Download from '../../../../../components/Backend/UI/Download/Download';

import * as actions from '../../../../../store/actions';
import { updateObject, convertDate } from '../../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

class Pending extends Component {
    state = {
        countries: []
    }

    async componentDidMount() {
        this.props.onGetPendingRequests();
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

    submitHandler = e => {
        e.preventDefault();
        this.props.onPostRequestUpdate(e.target.id, e.target);
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

                        return <Col xl={3} key={name + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
                            <div className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                                {content}
                            </div>
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
                            <I label="Platform">{request.platform.name}</I>
                            <I label="E-Mail Address">{request.email}</I>
                            <I label="User ID">{request.ref}</I>
                            <I label="Country">{country ? country.name : null}</I>
                            <I label="Phone Number">{request.phone}</I>
                            <I label="Issue">{request.issue.name}</I>
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

                    const editContent = <Form id={request.id} onSubmit={this.submitHandler}>
                        <FormGroup className="d-flex align-items-center">
                            <div className='text-700 pr-4'>Status</div>
                            <Label check>
                                <CustomInput type="radio" name="status" id="status-3" value={3} defaultChecked={request.status === 3} className={request.status === 3 ? 'text-700 text-' + colors[request.status] : ''} label="Solved" inline />
                            </Label>
                            <Label check>
                                <CustomInput type="radio" name="status" id="status-2" value={1} defaultChecked={request.status === 1} className={request.status === 1 ? 'text-700 text-' + colors[request.status] : ''} label="Processing" inline />
                            </Label>
                            <Label check>
                                <CustomInput type="radio" name="status" id="status-1" value={2} defaultChecked={request.status === 2} className={request.status === 2 ? 'text-700 text-' + colors[request.status] : ''} label="Cancelled" inline />
                            </Label>
                        </FormGroup>
                        <input type="hidden" name="page_status" value="pending" />

                        <div className="mt-4">
                            {request.status === 1 ? <Alert color={colors[request.status]} className={'pb-3'}>This request is under process. Would you like to update it?</Alert> : null}

                            <Button color="green">Confirm<FontAwesomeIcon icon={faCheck} fixedWidth className="ml-2" /></Button>{' '}
                            <Button color="danger">Cancel<FontAwesomeIcon icon={faTimes} fixedWidth className="ml-2" /></Button>
                        </div>
                    </Form>;

                    return updateObject(request, {
                        created_at: convertDate(request.created_at),
                        platform: request.platform.name,
                        issue: request.issue.name,
                        status: <Badge color={colors[request.status]} className="badge-block position-static"><FontAwesomeIcon icon={icons[request.status]} className={[0, 1].includes(request.status) ? "fa-spin" : ""} fixedWidth /> {texts[request.status]}</Badge>,
                        documents: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.documents.length} Document{request.documents.length > 1 ? 's' : ''}</Badge>,
                        attachment: <Badge color="nightblue" className="badge-block position-static"><FontAwesomeIcon icon={faFileArchive} className="text-orange" fixedWidth /> {request.issue_files.length} Attached File{request.issue_files.length > 1 ? 's' : ''}</Badge>,
                        description: <div className="d-flex">
                            <div style={{ maxWidth: 150 }} className="flex-fill text-truncate">{request.description}</div>
                            <View title={'Request description: ' + request.reqid} content={request.description}>
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
                            <List array={requestsData} data={JSON.stringify(requests)} bordered add="File a Request" link="/user/requests/add" icon={faCalendarAlt} title="Pending Requests" className="bg-white shadow-sm"
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
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onGetPendingRequests: () => dispatch(actions.getPendingRequests()),
    onPostRequestDelete: id => dispatch(actions.postRequestDelete(id)),
    onPostRequestUpdate: (id, data) => dispatch(actions.postRequestUpdate(id, data)),
    onResetRequests: () => dispatch(actions.resetRequests()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pending));