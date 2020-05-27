import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFilePdf, faPaperPlane, faFile, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';
import MyInput from '../../components/UI/Input/Input';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';
import Error from '../../components/Error/Error';
import Feedback from '../../components/Feedback/Feedback';

import * as actions from '../../store/actions';

const FormBlock = ({ title, subtitle, children }) => <div className="mt-5">
    <h5 className="text-darkblue">{title}<span className="text-danger text-300">*</span></h5>
    <div className="text-secondary text-300">{subtitle}</div>

    <div className="mt-4">{children}</div>
</div>;

class Request extends Component {
    state = {
        name: '',
        platform_id: '',
        email: '',
        ref: '',
        country: 'CM',
        code: '237',
        phone: '',
        issue_id: '',
        documents: [null, null, null],
        description: '',
        issue_files: [null, null, null],

        countries: [],
    }

    async componentDidMount() {
        this.props.onGetRequest();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.name > b.name);

        this.setState({ countries });
    }

    documentClickHandler = () => document.getElementsByClassName('documents')[this.state.documents.findIndex(el => !el)].click();

    issueFileClickHandler = () => document.getElementsByClassName('issue_files')[this.state.issue_files.findIndex(el => !el)].click();

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'country') return this.setState({ country: value, code: this.state.countries.find(({ country }) => country === value).code });
        if (name === 'documents[]') {
            const { documents } = this.state;
            documents[this.state.documents.findIndex(el => !el)] = files[0];
            return this.setState({ documents });
        }
        if (name === 'issue_files[]') {
            const { issue_files } = this.state;
            issue_files[this.state.issue_files.findIndex(el => !el)] = files[0];
            return this.setState({ issue_files });
        }
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onPostRequest(e.target);
    }

    render() {
        const { name, platform_id, email, ref, phone, issue_id, country, code, documents, description, issue_files, countries } = this.state;
        const { frontend: { request: { loading, error, message, platforms, issues, reqid } } } = this.props;

        let redirect;
        let errors;
        let content;
        if (loading || countries.length === 0) content = <CustomSpinner />;
        else {
            errors = <Error err={error} />;
            const feedback = <Feedback message={message} />;

            if (reqid) redirect = <Redirect to={'/request/success'} />;

            if (platforms && issues) {
                const platformsOptions = platforms.map(({ id, name }) => <option key={name + id} value={id}>{name}</option>);
                const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);
                const issuesOptions = issues.map(({ id, name }) => <option key={name + id} value={id}>{name}</option>);

                const documentsContent = documents.filter(d => d).map(({ type, name }) => {
                    let icon;
                    switch (type) {
                        case 'application/pdf':
                            icon = faFilePdf;
                            break;
                        default:
                            icon = faFileImage;
                            break;
                    }

                    const arr = name.split('.');
                    const formatlessName = arr.filter((n, i) => i < arr.length - 1).join('.');

                    return <Col xl={4} key={name + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
                        <div className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                            <FontAwesomeIcon icon={icon} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                        </div>
                        <div className="text-uppercase text-truncate pt-3 text-darkblue">
                            {formatlessName}
                        </div>
                    </Col>
                });

                const issueFilesContent = issue_files.filter(d => d).map(({ type, name }) => {
                    let icon;
                    switch (type) {
                        case 'application/pdf':
                            icon = faFilePdf;
                            break;
                        default:
                            icon = faFileImage;
                            break;
                    }

                    const arr = name.split('.');
                    const formatlessName = arr.filter((n, i) => i < arr.length - 1).join('.');

                    return <div key={name + Math.random()} className="pr-3 d-inline-block" style={{ maxWidth: 200 }}>
                        <div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-truncate text-nowrap">
                            <FontAwesomeIcon icon={icon} className="mr-2" />{formatlessName}
                        </div>
                    </div>
                });

                content = <Form onSubmit={this.submitHandler} encType="multipart/form-data">
                    {feedback}
                    <FormBlock
                        title="User info Gathering"
                        subtitle={<span>Please provide the information below. Note that all fields are <span className="text-danger">required</span> in this section.</span>}>
                        <Row className="col-xl-9 px-0">
                            <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={name} name="name" placeholder="Full Name" required />
                            <MyInput className="col-md-6" type="select" onChange={this.inputChangeHandler} value={platform_id} name="platform_id" placeholder="Select Platform" required>
                                <option>Select Platform</option>
                                {platformsOptions}
                            </MyInput>
                            <MyInput className="col-md-6" type="email" onChange={this.inputChangeHandler} value={email} name="email" placeholder="E-Mail Address" required />
                            <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={ref} name="ref" placeholder="User ID" />
                            <MyInput className="col-md-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                                <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                                    <span className={`flag-icon text-xx-large position-absolute flag-icon-${country.toLowerCase()}`} />
                                </div>
                            </span>} onChange={this.inputChangeHandler} value={country} name="country" required placeholder="Select Country">
                                <option>Select your country</option>
                                {countriesOptions}
                            </MyInput>
                            <input type="hidden" value={code} name="code" />
                            <MyInput type="tel" className="col-md-6" addon={<span className="text-secondary text-small">+{code}</span>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder="Phone Number" />

                            <MyInput className="col-md-6" type="select" onChange={this.inputChangeHandler} value={issue_id} name="issue_id" placeholder="Select Issue" required>
                                <option>Select Issue</option>
                                {issuesOptions}
                            </MyInput>
                        </Row>
                    </FormBlock>

                    <FormBlock
                        title="User documents"
                        subtitle="Please upload recommended documents">
                        <Col xl={9} className="px-0">
                            <FormGroup className="d-flex align-items-center">
                                <Row>
                                    {documentsContent}
                                </Row>

                                <input type="file" name="documents[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none documents" />
                                <input type="file" name="documents[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none documents" />
                                <input type="file" name="documents[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none documents" />

                                {documents.filter(d => d).length >= 3 ? null : <div className="pl-5">
                                    <div className="rounded-4 p-5 bg-green text-white d-flex justify-content-center align-items-center embed-responsive embed-responsive-1by1" style={{ cursor: 'pointer' }} onClick={this.documentClickHandler}><FontAwesomeIcon icon={faPlusCircle} size="2x" /></div>
                                </div>}
                            </FormGroup>

                            <div className="text-danger">Only PDF, PNG, JPG, JPEG files are allowed and limited to 3 files maximum.</div>
                        </Col>
                    </FormBlock>

                    <FormBlock
                        title="Issue description"
                        subtitle="Please provide a detailed description of the problem you are facing">
                        <Col xl={9} className="px-0">
                            <FormGroup className="px-0 col-xl-9">
                                <Input type="textarea" onChange={this.inputChangeHandler} value={description} name="description" style={{ height: 250 }} className="border-light text-secondary" />
                            </FormGroup>

                            <FormGroup className="d-flex align-items-center">
                                <div>
                                    {issueFilesContent}
                                </div>

                                <input type="file" name="issue_files[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none issue_files" />
                                <input type="file" name="issue_files[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none issue_files" />
                                <input type="file" name="issue_files[]" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg,.pdf" className="d-none issue_files" />

                                {issue_files.filter(d => d).length >= 3 ? null : <div className="pl-5">
                                    <FontAwesomeIcon icon={faPlusCircle} size="2x" className="text-green" style={{ cursor: 'pointer' }} onClick={this.issueFileClickHandler} />
                                </div>}
                            </FormGroup>

                            <div className="text-danger">Only PDF, PNG, JPG, JPEG files are allowed and limited to 3 files maximum.</div>
                        </Col>
                    </FormBlock>

                    <FormGroup className="pl-2 my-md-5 text-secondary text-left">
                        <Label check>
                            <CustomInput color="yellow" type="checkbox" id="terms" name="terms" label="Accept terms and conditions" inline />
                        </Label>
                    </FormGroup>

                    <BetweenButton icon={faPaperPlane} pill className="py-3 px-4" color="darkblue">Submit a request</BetweenButton>
                </Form>;
            }
        }

        return (
            <Container>
                <Row className="pt-5">
                    <Col lg={8} className="pt-5">
                        <h1 className="text-700 text-darkblue">Submit a request to get started</h1>
                        <h4 className="text-300 text-secondary">Fill the form below and send</h4>

                        <div className="w-60 border-top border-secondary mt-4 pt-4 pb-5 text-secondary" />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        {errors}
                        {redirect}
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
    onGetRequest: () => dispatch(actions.getRequest()),
    onPostRequest: data => dispatch(actions.postRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Request);
