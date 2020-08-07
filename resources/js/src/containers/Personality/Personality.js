import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFilePdf, faPaperPlane, faFile, faFileImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';
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

class Personality extends Component {
    state = {
        name: '',
        ref: '',
        photo: null,
        title_id: '',
    }

    componentDidMount() {
        this.props.onGetPersonality();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.frontend.personality.error && this.props.frontend.personality.error) {
            window.scrollTo(0, 0);
            this.setState({ photo: null });
        }
    }


    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'ref') {
            return value.length <= 6 && this.setState({ [name]: value.toUpperCase() });
        }
        if (name === 'photo') {
            return this.setState({ [name]: files[0] });
        }
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onPostPersonality(e.target);
    }

    render() {
        const { name, ref, photo, title_id } = this.state;
        const { frontend: { personality: { loading, error, message, titles } } } = this.props;

        let redirect;
        let errors;
        let content;
        if (loading) content = <CustomSpinner />;
        else {
            errors = <Error err={error} />;
            const feedback = <Feedback message={message} />;

            if (titles) {
                const titlesOptions = titles.sort((a, b) => a.name > b.name).map(({ id, name }) => <option key={name + id} value={id}>{name}</option>);

                content = <Form onSubmit={this.submitHandler} encType="multipart/form-data">
                    {feedback}
                    <FormBlock
                        title="User info Gathering"
                        subtitle={<span>Please provide the information below. Note that all fields are <span className="text-danger">required</span>.</span>}>
                        <Row className="col-xl-9 px-0">
                            <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={name} validation={{ required: true }} name="name" placeholder="Full Name" required />
                            <MyInput className="col-md-6" type="select" onChange={this.inputChangeHandler} value={title_id} validation={{ required: true, isNumeric: true }} name="title_id" placeholder="Select Title" required>
                                <option>Select Title</option>
                                {titlesOptions}
                            </MyInput>
                            <MyInput className="col-md-6" type="file" validation={{ required: true }} name="photo" placeholder="Photo" required />
                            <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={ref} validation={{ required: true, minLength: 6, maxLength: 6 }} name="ref" placeholder="User ID" required />
                        </Row>
                    </FormBlock>

                    <Row>
                        <Col xl={9} className="pt-3">
                            <div className="pr-md-3">
                                <BetweenButton icon={faPaperPlane} pill className="py-3 px-4 text-truncate" color="darkblue">Submit</BetweenButton>
                            </div>
                        </Col>
                    </Row>
                </Form>;
            }
        }

        return (
            <Container>
                <Row className="pt-5">
                    <Col lg={8} className="pt-5">
                        <h1 className="text-700 text-darkblue">Are you a Personality on Liyeplimal?</h1>
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
    onGetPersonality: () => dispatch(actions.getPersonality()),
    onPostPersonality: data => dispatch(actions.postPersonality(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Personality);
