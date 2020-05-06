import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';
import MyInput from '../../components/UI/Input/Input';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';
import * as actions from '../../store/actions';

import JohnAlverosa from '../../assets/images/men-images-png-1@2x.png';
import PaloAltonio from '../../assets/images/product_111_11@2x.png';
import DoeBorison from '../../assets/images/istockphoto-531547724-612x612@2x.png';

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
        description: '',
        terms: false,

        countries: [],
    }

    async componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => a.country > b.country);

        this.setState({ countries });
    }

    inputChangeHandler = e => {
        const { name, value, checked } = e.target;
        if (name === 'country') return this.setState({ country: value, code: this.state.countries.find(({ country }) => country === value).code });
        if (name === 'terms') return this.setState({ terms: checked });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.history.push('/request/success');
    }

    render() {
        const { name, platform_id, email, ref, countries, country, code, phone, issue_id, terms } = this.state;

        let content;
        // if (countries.length === 0) content = <CustomSpinner />;
        if (false) content = <CustomSpinner />;
        else {
            const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

            content = <Form onSubmit={this.submitHandler} encType="multipart/form-data">
                <FormBlock
                    title="User info Gathering"
                    subtitle={<span>Please provide the information below. Note that all fields are <span className="text-danger">required</span> in this section.</span>}>
                    <Row className="col-xl-9 px-0">
                        <MyInput className="col-md-6" type="text" name="name" value={name} onChange={this.inputChangeHandler} placeholder="Full Name" required />
                        <MyInput className="col-md-6" type="select" name="platform_id" value={platform_id} onChange={this.inputChangeHandler} placeholder="Select Platform" required>
                            <option>Select Platform</option>
                        </MyInput>
                        <MyInput className="col-md-6" type="email" name="email" value={email} onChange={this.inputChangeHandler} placeholder="E-Mail Address" required />
                        <MyInput className="col-md-6" type="text" name="ref" value={ref} onChange={this.inputChangeHandler} placeholder="User ID" required />
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

                        <MyInput className="col-md-6" type="select" name="issue_id" value={issue_id} onChange={this.inputChangeHandler} placeholder="Select Issue" required>
                            <option>Select Issue</option>
                        </MyInput>
                    </Row>
                </FormBlock>

                <FormBlock
                    title="User documents"
                    subtitle="Please upload recommended documents">
                    <Col xl={9} className="px-0">
                        <FormGroup className="d-flex align-items-center">
                            <Row>
                                <Col xs={4} className="pr-0"><div style={{ background: 'url(' + JohnAlverosa + ') no-repeat center', backgroundSize: 'cover' }} className="rounded-4 overflow-hidden p-2 bg-white d-flex justify-content-center align-items-center text-nowrap text-transparent shadow embed-responsive embed-responsive-1by1"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M</div></Col>
                                <Col xs={4} className="pr-0"><div style={{ background: 'url(' + PaloAltonio + ') no-repeat center', backgroundSize: 'cover' }} className="rounded-4 overflow-hidden p-2 bg-white d-flex justify-content-center align-items-center text-nowrap text-transparent shadow embed-responsive embed-responsive-1by1"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />SCREENS_232</div></Col>
                                <Col xs={4} className="pr-0"><div style={{ background: 'url(' + DoeBorison + ') no-repeat center', backgroundSize: 'cover' }} className="rounded-4 overflow-hidden p-2 bg-white d-flex justify-content-center align-items-center text-nowrap text-transparent shadow embed-responsive embed-responsive-1by1"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />ERROR_EE234</div></Col>
                            </Row>

                            <div className="pl-5">
                            <div className="rounded-4 p-5 bg-green text-white d-flex justify-content-center align-items-center embed-responsive embed-responsive-1by1"><FontAwesomeIcon icon={faPlusCircle} size="2x" /></div>
                            </div>
                        </FormGroup>

                        <div className="text-danger">Only PDF, PNG, JPG, JPEG files are allowed and limited to 3 files maximum.</div>
                    </Col>
                </FormBlock>

                <FormBlock
                    title="Issue description"
                    subtitle="Please provide a detailed description of the problem you are facing">
                    <Col xl={9} className="px-0">
                        <FormGroup className="px-0 col-xl-9">
                            <Input type="textarea" name="description" onChange={this.inputChangeHandler} style={{ height: 250 }} className="border-light text-secondary" />
                        </FormGroup>

                        <FormGroup className="d-flex align-items-center">
                            <Row>
                                <Col xs={4} className="pr-0"><div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-nowrap"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M</div></Col>
                                <Col xs={4} className="pr-0"><div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-nowrap"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />SCREENS_232</div></Col>
                                <Col xs={4} className="pr-0"><div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-nowrap"><FontAwesomeIcon icon={faFilePdf} className="mr-2" />ERROR_EE234</div></Col>
                            </Row>

                            <div className="pl-5">
                                <FontAwesomeIcon icon={faPlusCircle} size="2x" className="text-green" />
                            </div>
                        </FormGroup>

                        <div className="text-danger">Only PDF, PNG, JPG, JPEG files are allowed and limited to 3 files maximum.</div>
                    </Col>
                </FormBlock>

                <FormGroup className="pl-2 my-md-5 text-secondary text-left">
                    <Label check>
                        <CustomInput color="yellow" type="checkbox" id="terms" onChange={this.inputChangeHandler} value={terms} name="terms" label="Accept terms and conditions" inline />
                    </Label>
                </FormGroup>

                <BetweenButton icon={faPaperPlane} pill className="py-3 px-4" color="darkblue">Submit a request</BetweenButton>
            </Form>;
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
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Request);
