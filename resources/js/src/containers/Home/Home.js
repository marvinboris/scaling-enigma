import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck, faClock, faComments } from "@fortawesome/free-solid-svg-icons";
import { faComment, faCircle } from '@fortawesome/free-regular-svg-icons';

import "./Home.css";
import * as actions from "../../store/actions";
import BetweenButton from "../../components/UI/Button/BetweenButton/BetweenButton";

import UnderCarouselBlock from "./UnderCarouselBlock/UnderCarouselBlock";
import CustomerBlock from "./CustomerBlock/CustomerBlock";

import BannerImg from "../../assets/images/Group 8@2x.png";
import AdvantagesImg from "../../assets/images/Group 19@2x.png";
import RotateImg from "../../assets/images/Group 624@2x.png";

import FridolinBruno from "../../assets/images/man-in-suit2@2x.png";
import JaffGodwill from "../../assets/images/images@2x.png";
import SamuelRolande from "../../assets/images/33a762719ceb41b28820b45364c02eec@2x.png";

const Li = ({ children }) => <div className="text-secondary"><FontAwesomeIcon icon={faCircle} className="mr-2" size="sm" />{children}</div>;

class Home extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <div className="Home w-100">
                <div className="position-relative full-height-app d-flex flex-column justify-content-center">
                    <Container>
                        <Row className="justify-content-between">
                            <Col lg={8}>
                                <h1 className="text-700 text-darkblue">Global Investment Trading Support</h1>
                                <h4 className="text-300 text-blue">Request Management System</h4>

                                <div className="w-60 border-top border-secondary mt-4 pt-4 pb-5 text-secondary">
                                    Hey There ! Welcome to liyeplimal request management system. Looking
                                    for a solution ? check out our new request management system
                                    try it now.
                                </div>

                                <BetweenButton icon={faPaperPlane} pill className="py-3 px-4 mr-2" color="darkblue">Submit a request</BetweenButton>
                                <BetweenButton icon={faCheck} pill className="py-3 px-4" color="yellow">Check request</BetweenButton>
                            </Col>

                            <Col lg={4}>
                                <img src={BannerImg} className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row className="py-5 my-5">
                        <UnderCarouselBlock icon={faCheck} iconColor="green" title="Best Support">
                            Get a good support and quick response
                            from our experienced team. Experience
                            a new way of solving your problems
                            while in GIT ecosystem.
                        </UnderCarouselBlock>

                        <UnderCarouselBlock icon={faClock} iconColor="orange" title="Availability">
                            As it has always been one of our duties,
                            we always make sure we are available
                            when you need us.
                        </UnderCarouselBlock>

                        <UnderCarouselBlock icon={faComments} iconColor="darkblue" title="Live Chat Support">
                            We have added a Live Chat support
                            to help our customer find efficient
                            solutions to their problem. Checkout
                            our Live Chat system and try it.
                        </UnderCarouselBlock>

                        <UnderCarouselBlock icon={faComment} iconColor="danger" title="Available Forum">
                            Do you have any queries, please kindly
                            check our forum and find the
                            answers you need.
                        </UnderCarouselBlock>
                    </Row>

                    <Row className="py-5 my-5 text-secondary">
                        <Col lg={8}>
                            <div>
                                <FontAwesomeIcon icon={faCircle} className="mr-2" size="sm" />Features
                            </div>

                            <h4 className="my-4 text-blue">Advantages of using this support</h4>

                            <div>
                                <Li>Request are sent in ordered way.</Li>
                                <Li>Get faster request reply with a maximum waiting time of 72 hours. </Li>
                                <Li>Gives you the possibility to receive Email notification</Li>
                                <Li>You are notified once you problem has been solved</Li>
                                <Li>System is secured and keep your data confidential. </Li>
                                <Li>The system gives you direct access to Live Chat for a bette follow up.</Li>
                                <Li>Access forum just by clicking on a single link</Li>
                                <Li>Your problem can be solved no matter where you are as soon as received. </Li>
                                <Li>And many more features...</Li>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <img src={AdvantagesImg} className="img-fluid" />
                        </Col>
                    </Row>

                    <div className="pt-5 mt-5">
                        <div className="text-center mb-5">
                            <h4 className="text-secondary text-300">TESTIMONIALS</h4>
                            <h4 className="text-blue text-700">
                                What customers are saying.
                            </h4>
                        </div>
                        <Row className="justify-content-center text-center">
                            <Row className="pt-5 my-5">
                                <CustomerBlock title="What A System ! This Is Tremendous" mark={4} name="FRIDOLIN BRUNO" src={FridolinBruno}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                                <CustomerBlock title="Amazing Support Response Time" mark={5} flag="ca" name="JAFF GODWILL. Y" active src={JaffGodwill}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                                <CustomerBlock title="Best Expirience So Farience So Far" mark={5} name="SAMUEL ROLANDE" src={SamuelRolande}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in is jos jomes jiooes n oes oh seri os oifeuo s oifeso</CustomerBlock>
                            </Row>
                        </Row>
                    </div>
                </Container>

                <div className="position-relative py-5 text-white">
                    <div className="w-100 h-100 position-absolute" style={{ top: 0, left: 0 }}>
                        <div className="position-relative bg-darkblue h-100" style={{ transform: 'rotate(5deg)', transformOrigin: 'top left', width: '200%' }} />
                    </div>

                    <Container>
                        <Row>
                            <Col lg={8} style={{ transform: 'translateY(25%)' }}>
                                <h4>Get started with Global Investment Trading</h4>
                                <h1>Request Management System</h1>

                                <div className="my-5">Start using now</div>

                                <BetweenButton icon={faPaperPlane} pill className="py-3 px-4" color="yellow">Submit a request</BetweenButton>
                            </Col>

                            <Col lg={4}>
                                <img src={RotateImg} className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Col xs={6} className="embed-responsive embed-responsive-21by9" />
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
