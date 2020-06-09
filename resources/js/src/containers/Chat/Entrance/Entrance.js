import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput } from 'reactstrap';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import MyInput from '../../../components/UI/Input/Input';
import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../components/Error/Error';
import Feedback from '../../../components/Feedback/Feedback';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../store/actions/index';

export class Entrance extends Component {
    state = {
        reqid: '',
        otp: 'email'
    }

    componentDidUpdate() {
        const { frontend: { chat: { hash } }, onSetHash, history } = this.props;
        if (hash) {
            onSetHash(hash);
            history.push('/chat/verify');
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
        const { frontend: { chat: { loading, error, message } } } = this.props;
        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <>
            <div className="h4 mb-4 text-darkblue text-sm-left">Get into <span className="text-yellow">Request Chat</span></div>
            {errors}
            {feedback}
            <Form onSubmit={this.submitHandler}>
                <MyInput type="text" icon={faUser} onChange={this.inputChangeHandler} value={this.state.reqid} name="reqid" required placeholder="Request ID" />

                <FormGroup className="ml-2 mt-4 mb-5 d-flex align-items-center text-darkblue">
                    <div className='text-700 pr-4'>OTP Method</div>
                    <Label check>
                        <CustomInput type="radio" id="sms" name="otp" value="sms" label="SMS" disabled inline />
                    </Label>
                    <Label check>
                        <CustomInput type="radio" id="email" defaultChecked name="otp" value="email" label="Email" inline />
                    </Label>
                </FormGroup>

                <BetweenButton color="yellow" pill className="py-3 px-4 btn-block" icon={faSignInAlt}>Get In</BetweenButton>
            </Form>
        </>;

        return content;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.postReqid(data)),
    onSetHash: hash => dispatch(actions.setChatHash(hash)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entrance);