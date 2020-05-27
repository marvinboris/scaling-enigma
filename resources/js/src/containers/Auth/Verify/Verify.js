import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup } from 'reactstrap';
import { faSignInAlt, faCode } from '@fortawesome/free-solid-svg-icons';

import Layout from '../Layout';

import MyInput from '../../../components/UI/Input/Input';
import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../store/actions/index';

export class Home extends Component {
    state = {
        code: '',
    }

    componentWillUnmount() {
        const { onSetHash } = this.props;
        onSetHash(null);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = (e, name) => {
        this.setState({ [name]: e.target.value });
    }

    render() {
        const { auth: { hash, loading, error, message }, history, onResendCode } = this.props;
        if (!hash) history.push('/auth/login');

        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <>
            <div className="h4 mb-4 text-darkblue text-sm-left">Enter <span className="text-yellow">Verification code</span></div>
            {errors}
            {feedback}
            <Form onSubmit={this.submitHandler}>
                <MyInput type="text" icon={faCode} onChange={(e) => this.inputChangeHandler(e, "code")} value={this.state.code} name="code" required placeholder="Verification code" />
                <input type="hidden" name="hash" value={hash} />
                <FormGroup className="ml-2 mb-5 mt-4">
                    <p className="text-darkblue text-right">Didn't receive code? <strong className="text-yellow" style={{ cursor: 'pointer' }} onClick={() => onResendCode(hash)}>Resend</strong></p>
                </FormGroup>

                <BetweenButton color="yellow" pill className="py-3 px-4 btn-block" icon={faSignInAlt}>Continue</BetweenButton>
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
    onAuth: data => dispatch(actions.authVerify(data)),
    onSetHash: hash => dispatch(actions.setHash(hash)),
    onResendCode: hash => dispatch(actions.resendCode(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);