import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFilePdf, faPaperPlane, faFile, faFileImage } from '@fortawesome/free-solid-svg-icons';

import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';
import MyInput from '../../../components/UI/Input/Input';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';
import Download from '../../../components/Backend/UI/Download/Download';

import * as actions from '../../../store/actions';

const FormBlock = ({ title, subtitle, children }) => <div className="mt-5">
    <h5 className="text-darkblue">{title}</h5>
    <div className="text-secondary text-300">{subtitle}</div>

    <div className="mt-4">{children}</div>
</div>;

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

        let errors;
        const form = <Form inline onSubmit={this.submitHandler}>
            <FormGroup>
                <MyInput type="text" name="reqid" id="reqid" onChange={this.inputChangedHandler} value={reqid} placeholder="Request ID" />
            </FormGroup>
            <BetweenButton icon={faPaperPlane} pill className="ml-3 py-3 px-4" color="darkblue">Submit</BetweenButton>
        </Form>;
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

                const colors = ['orange', 'primary', 'danger', 'success'];
                const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];

                content = <div>
                    {feedback}
                    <FormBlock title="Support feedback">
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
                    </FormBlock>

                    <FormBlock title="User info Gathering">
                        <Row className="col-xl-9 px-0">
                            <MyInput className="col-md-6" type="text" value={name} readonly />
                            <MyInput className="col-md-6" type="text" value={platform.name} readonly />
                            <MyInput className="col-md-6" type="email" value={email} readonly />
                            <MyInput className="col-md-6" type="text" value={ref} placeholder="User ID" readonly />
                            <MyInput className="col-md-6" type="text" addon={<span className="text-secondary text-small d-inline-flex">
                                <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                                    <span className={`flag-icon text-xx-large position-absolute flag-icon-${country.toLowerCase()}`} />
                                </div>
                            </span>} value={countryEl.name} readonly />
                            <MyInput type="tel" className="col-md-6" addon={<span className="text-secondary text-small">+{countryEl.code}</span>} value={phone} readonly />

                            <MyInput className="col-md-6" type="text" value={issue.name} readonly />
                        </Row>
                    </FormBlock>

                    <FormBlock title="User documents">
                        <Col xl={9} className="px-0">
                            <FormGroup className="d-flex align-items-center">
                                <Row>
                                    {documentsContent}
                                </Row>
                            </FormGroup>
                        </Col>
                    </FormBlock>

                    <FormBlock title="Issue description">
                        <Col xl={9} className="px-0">
                            <FormGroup className="px-0 col-xl-9">
                                <Input type="textarea" value={description} readOnly style={{ height: 250 }} className="border-light text-secondary" />
                            </FormGroup>

                            <FormGroup className="d-flex align-items-center">
                                <div>
                                    {issueFilesContent}
                                </div>
                            </FormGroup>
                        </Col>
                    </FormBlock>
                </div>;
            }
        }

        return (
            <Container>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Request);
