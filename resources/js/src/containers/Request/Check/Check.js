import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFilePdf, faPaperPlane, faFile, faFileImage, faCheckCircle, faSpinner, faTimesCircle, faUser, faEdit } from '@fortawesome/free-solid-svg-icons';

import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';
import MyInput from '../../../components/UI/Input/Input';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';
import Download from '../../../components/Backend/UI/Download/Download';

import * as actions from '../../../store/actions';

import './Check.css';

const FormBlock = ({ title, subtitle, children }) => <div className="mt-5">
    <h5 className="text-darkblue">{title}</h5>
    <div className="text-secondary text-300">{subtitle}</div>

    <div className="mt-4">{children}</div>
</div>;

const TableRow = ({ label, border, children }) => <tr>
    <td className={border ? border : ""}>{label}</td>
    <td className={"text-700 text-wrap " + (border ? border : "")}>{children}</td>
</tr>;

class Request extends Component {
    state = {
        reqid: '',

        countries: [],
    }

    async componentDidMount() {
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.name > b.name);

        this.setState({ countries });
    }

    componentWillUnmount() {
        this.props.onResetRequest();
    }

    inputChangedHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onPostCheckRequest(e.target);
    }

    render() {
        const { reqid, countries } = this.state;
        const { frontend: { request: { loading, error, message, request } } } = this.props;

        const colors = ['orange', 'myprimary', 'red', 'green'];
        const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];
        const icons = [faSpinner, faSpinner, faTimesCircle, faCheckCircle];
        let width;
        if (request) {
            if (request.status < 2) width = 10 + (45) * request.status;
            else width = 100;
            width = width + '%';
        }

        let errors;
        const form = <div className="d-flex align-items-center flex-wrap">
            <Form className="d-flex align-items-start" onSubmit={this.submitHandler}>
                <FormGroup className="pr-3">
                    <MyInput type="text" name="reqid" id="reqid" onChange={this.inputChangedHandler} value={reqid} placeholder="Request ID" />
                </FormGroup>
                <BetweenButton icon={faCheckCircle} pill className="ml-md-3 py-3 px-4" color="yellow">Check</BetweenButton>
            </Form>

            {request ? <div className="ml-lg-5 mr-4 mt-5 mt-md-0 py-4 position-relative flex-fill">
                <div className={"position-absolute text-700 text-orange" + (request.status > 0 ? "-50" : "")} style={{ bottom: 'calc(100% + 10px)', left: '10%', transform: 'translateX(-50%)' }}>Pending</div>
                {request.status > 0 ? <>
                    <div className={"position-absolute text-700 text-myprimary" + (request.status > 1 ? "-50" : "")} style={{ bottom: 'calc(100% + 10px)', left: '55%', transform: 'translateX(-50%)' }}>Processing</div>
                </> : null}
                {request.status > 1 ? <>
                    {request.status === 3 ?
                        <div className={"position-absolute text-700 text-green"} style={{ bottom: 'calc(100% + 10px)', left: '100%', transform: 'translateX(-50%)' }}>Solved</div>
                        : <div className={"position-absolute text-700 text-red"} style={{ bottom: 'calc(100% + 10px)', left: '100%', transform: 'translateX(-50%)' }}>Cancelled</div>}
                </> : null}
                <div className={"position-absolute triangle bg-" + colors[request.status] + "-25"} style={{ width: 25, height: 25, top: 'calc(100% + 1rem)', left: width, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />

                <div className="rounded overflow-hidden" style={{ background: '#d2d2d2', height: 7 }}>
                    <div className={"h-100 bg-" + colors[request.status]} style={{ width }} />
                </div>
                <div className="position-absolute d-inline" style={{ top: '50%', left: width, transform: 'translate(-50%,-50%)' }}>
                    <div className={"d-flex justify-content-center align-items-center bg-white rounded-circle border border-2 border-" + colors[request.status]} style={{ width: 25, height: 25 }}>
                        {/* <div className={"rounded-circle d-flex text-center align-items-center shadow-sm bg-" + colors[request.status]} style={{ width: 18, height: 18 }}> */}
                        <FontAwesomeIcon icon={icons[request.status]} className={"text-" + colors[request.status] + " " + ([0, 1].includes(request.status) ? "fa-spin" : '')} fixedWidth size="sm" />
                        {/* </div> */}
                    </div>
                </div>
            </div> : null}
        </div>;
        let content;
        if (loading || countries.length === 0) content = <CustomSpinner />;
        else {
            errors = <Error err={error} />;
            const feedback = <Feedback message={message} />;

            if (request) {
                const { name, platform, email, ref, phone, issue, country, documents, description, issue_files, status, admin_files, comments } = request;
                const countryEl = countries.find(el => el.country === country);

                const documentsContent = documents.filter(d => d).map(doc => {
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

                const issueFilesContent = issue_files.filter(d => d).map(issue_file => {
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

                const adminFilesContent = admin_files ? admin_files.filter(d => d).map(doc => {
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
                }) : null;

                const tableContent = <>
                    <TableRow border={"border border-" + colors[status]} label="Full Name">{name}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="Selected Platform">{platform.name}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="E-Mail Address">{email}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="User ID">{ref}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="Country">{countryEl.name}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="Phone Number">{phone}</TableRow>
                    <TableRow border={"border border-" + colors[status]} label="Isue Selected">{issue.name}</TableRow>
                </>;

                content = <div className="pt-3">
                    {feedback}
                    {/* <FormBlock title="Support feedback">
                        <Row className="col-xl-9 px-0">
                            <FormGroup className="col-12 text-700">
                                Status: <span className={'text-' + colors[status]}>{texts[status]}</span>
                            </FormGroup>
                            {comments ? <FormGroup className="col-xl-9">
                                <Input type="textarea" readOnly value={comments} height={250} className="border-light text-secondary" />
                            </FormGroup> : null}
                            {admin_files && admin_files.length > 0 ? <FormGroup className="col-12">
                                <Row>{adminFilesContent}</Row>
                            </FormGroup> : null}

                            <Col xs={12}>
                                <hr />
                            </Col>
                        </Row>
                    </FormBlock> */}

                    <div className={"rounded-2 text-secondary p-1 bg-" + colors[status] + "-25"}>
                        <div className={"py-3 px-4 d-flex justify-content-between flex-wrap align-items-center border-bottom border-2 border-" + colors[status]}>
                            <div>
                                <FontAwesomeIcon icon={faUser} className={"mr-2 text-" + colors[status]} />Information <span className="text-700">provided</span>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faUser} className={"mr-2 text-" + colors[status]} />Request Status :
                                <span className={"pl-4 text-" + colors[status]}>
                                    <FontAwesomeIcon icon={icons[status]} className={[0, 1].includes(status) ? "fa-spin" : ""} />
                                    <span className="ml-2 text-700">{texts[status]}</span>
                                </span>
                            </div>
                        </div>

                        <div className={"p-4"}>
                            <Row>
                                <Col lg={6}>
                                    <div className="table-responsive">
                                        <Table borderless className={"text-secondary border border-" + colors[status]}>
                                            <tbody>
                                                {tableContent}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>

                                <Col lg={6} className="pt-3 pt-lg-0">
                                    <div className="mb-3"><FontAwesomeIcon icon={faEdit} className={"mr-2 text-" + colors[status]} />Issue description</div>

                                    <div className={"text-justify py-4 px-4 bg-white-20 rounded-1 border border-" + colors[status] + "-50"} style={{ height: 298, overflowY: 'auto' }}>{description}</div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>;
            }
        }

        return (
            <Container className="Check">
                <Row className="pt-5">
                    <Col lg={8} className="pt-5">
                        <h1 className="text-700 text-darkblue">Check a request of yours</h1>
                        <h4 className="text-300 text-secondary">Fill the form below and send</h4>

                        <div className="w-60 border-top border-secondary mt-4 pt-4 pb-5 text-secondary" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        {errors}
                        {form}
                        {content}
                    </Col>
                </Row>
                <Col md={6} className="embed-responsive embed-responsive-21by9" />
            </Container>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onPostCheckRequest: data => dispatch(actions.postCheckRequest(data)),
    onResetRequest: () => dispatch(actions.resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Request);
