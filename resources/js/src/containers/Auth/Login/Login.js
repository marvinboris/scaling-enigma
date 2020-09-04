import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput } from 'reactstrap';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';

import Layout from '../Layout';

import MyInput from '../../../components/UI/Input/Input';
import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../store/actions/index';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        otp: 'email',

        recaptcha: '',
    }

    componentDidUpdate() {
        const { auth: { hash }, onSetHash, history } = this.props;
        if (hash) {
            onSetHash(hash);
            history.push('/auth/verify');
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { auth: { loading, error, message } } = this.props;
        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <>
            <div className="h4 mb-4 text-darkblue text-sm-left">Sign In to <span className="text-yellow">User panel</span></div>
            {errors}
            {feedback}
            <Form onSubmit={this.submitHandler}>
                <MyInput type="text" icon={faUser} onChange={this.inputChangeHandler} value={this.state.email} name="email" required placeholder="E-mail address" />
                <MyInput type="password" icon={faLock} onChange={this.inputChangeHandler} value={this.state.password} name="password" required placeholder="Password" />

                <FormGroup className="ml-2 mt-4 mb-5 d-flex align-items-center text-darkblue">
                    <div className='text-700 pr-4'>OTP Method</div>
                    <Label check>
                        <CustomInput type="radio" id="sms" name="otp" value="sms" label="SMS" disabled inline />
                    </Label>
                    <Label check>
                        <CustomInput type="radio" id="email" defaultChecked name="otp" value="email" label="Email" inline />
                    </Label>
                </FormGroup>

                {/* <FormGroup className="mb-5">
                    <ReCAPTCHA sitekey={GOOGLE_RECAPTCHA_SITE_KEY} onChange={this.inputChangeHandler} />
                </FormGroup> */}

                <BetweenButton color="yellow" pill className="py-3 px-4 btn-block" icon={faSignInAlt}>Sign In</BetweenButton>
            </Form>
        </>;

        return (
            <Layout>
                {content}
            </Layout>
        )
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.authLogin(data)),
    onSetHash: hash => dispatch(actions.setHash(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);