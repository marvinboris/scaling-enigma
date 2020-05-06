import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Form, Container, Input, FormGroup, Label, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../../store/actions';
import { Link } from 'react-router-dom';

const FormBlock = ({ title, subtitle, children }) => <div className="mt-5">
    <h5 className="text-darkblue">{title}<span className="text-danger text-300">*</span></h5>
    <div className="text-secondary text-300">{subtitle}</div>

    <div className="mt-4">{children}</div>
</div>;

class Success extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <Container>
                <Row className="pt-5 mt-5 justify-content-center">
                    <Col lg={6} className="pt-5">
                        <div className="p-3 p-sm-5 rounded-10 bg-green-20 text-secondary">
                            <h1 className="text-700 text-green position-relative">
                                <span>Request submit successful</span>

                                <FontAwesomeIcon icon={faCheck} size="2x" className="position-absolute" style={{ top: 0, right: 0 }} />
                            </h1>

                            <div className="w-60 border-top border-secondary mt-4 pt-4 pb-5" />

                            <div>
                                Hello dear user, we are happy to inform you that your request was submitted successfully.
                                You will be notified by the email <span className="text-green text-700">demo@gmail.com</span>, we kindly count on your patience as
                                request normally have to go through several verification and may take up to 72 hours
                                maximum. If you don't receive any notification from the support within that period,
                                please kindly contact us asap at <span className="text-green text-700">support@git-sa.net</span>. We sent the below request ID
                                to your mail. Keep it safe, it will help you check if your issue was solved.
                            </div>

                            <div className="mt-5">Your request ID is : <span className="text-700">2020051200012LIY</span></div>
                        </div>

                        <div className="text-center text-x-large text-700 mt-5">
                            <Link to="/request" className="text-darkblue text-decoration-none d-inline-flex align-items-center">
                                <FontAwesomeIcon icon={faAngleLeft} className="mr-2" size="2x" />
                                Go Back
                            </Link>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Success);
