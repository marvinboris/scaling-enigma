import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

import PresentationalContainer from '../../components/UI/PresentationalContainer/PresentationalContainer';
import TeamMemberCard from '../../components/UI/TeamMemberCard/TeamMemberCard';
import WithPoint from '../../components/UI/WithPoint/WithPoint';
import BetweenButton from '../../components/UI/Button/BetweenButton/BetweenButton';
import AboutUsBanner from './Banner/Banner';
import ClientBlock from './ClientBlock/ClientBlock';
import Subtitle from './Subtitle/Subtitle';
import * as actions from '../../store/actions';

import RecentPosts from '../../assets/images/photo-1498050108023-c5249f4df085.png';

import JohnAlverosa from '../../assets/images/men-images-png-1@2x.png';
import PaloAltonio from '../../assets/images/product_111_11@2x.png';
import DoeBorison from '../../assets/images/istockphoto-531547724-612x612@2x.png';

import Limo from '../../assets/images/Liom-logo-New@2x.png';
import Nasdaq from '../../assets/images/2@2x.png';
import Bbva from '../../assets/images/5@2x.png';
import BnpParibas from '../../assets/images/3@2x.png';
import Santander from '../../assets/images/4@2x.png';

class AboutUs extends Component {
    componentDidMount() {
        if (this.props.auth.authPage) this.props.onAuthPageOff();
        if (this.props.auth.userPage) this.props.onUserPageOff();
    }

    render() {
        return (
            <Col xs={12} className="AboutUs p-0">
                <AboutUsBanner />
                <PresentationalContainer user innerClassName="py-5">
                    <Row>
                        <Col lg={9} className="border-right">
                            <Row>
                                <Col lg={4} className="border-right px-5">
                                    <h1 className="text-pink text-montserrat-alt text-700">About Us</h1>


                                </Col>

                                <Col lg={8} className="px-5">
                                    <Subtitle>What we do</Subtitle>
                                    <p className="text-400 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>

                                    <Subtitle>You meant a lot to us !</Subtitle>
                                    <p className="text-400 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>

                                    <BetweenButton icon="arrow-alt-circle-right" color="pink" className="rounded-0">
                                        Get a quote
                                    </BetweenButton>
                                </Col>

                                <Col xs={12} className="px-5 py-4">
                                    <hr />
                                </Col>

                                <Col lg={4}>

                                </Col>

                                <Col lg={8} className="px-5">
                                    <h1 className="text-pink text-montserrat-alt text-700">Our Services</h1>
                                    <p className="text-400 mb-4">It is a long established fact that a reader will be distracted by the readable here'. It is a long It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asopposedcontent of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contentThe point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here'. It is a long Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content</p>

                                    <BetweenButton icon="arrow-alt-circle-right" color="pink" className="mr-4 rounded-0">
                                        Read More
                                    </BetweenButton>
                                    <BetweenButton icon="arrow-alt-circle-right" color="green" className="rounded-0">
                                        Download PDF
                                    </BetweenButton>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={3} className="px-5">
                            <Subtitle>Recent Posts</Subtitle>

                            <img src={RecentPosts} className="img-fluid" />
                        </Col>
                    </Row>
                </PresentationalContainer>
                <PresentationalContainer user innerClassName="pb-5" style={{ paddingRight: '5%', paddingLeft: '5%' }}>
                    <h1 className="text-pink text-montserrat-alt text-700">Our experienced team</h1>
                    <p className="text-400">It is a long established fact that a reader will be distracted by the readable here'. It is a long It is a long established fact that a read</p>
                    <Row>
                        <TeamMemberCard name="John Alverosa" title="Managing Director" src={JohnAlverosa} />
                        <TeamMemberCard name="Palo Altonio" title="Senior Accountant" src={PaloAltonio} />
                        <TeamMemberCard name="Doe Borison" title="Graphic Designer" src={DoeBorison} />
                    </Row>
                </PresentationalContainer>
                <PresentationalContainer user innerClassName="pb-5" style={{ paddingRight: '5%', paddingLeft: '5%' }}>
                    <div className="d-flex justify-content-center">
                        <h1 className="text-pink text-montserrat-alt text-700">Our Clients</h1>
                    </div>
                    <Row className="align-items-center">
                        <ClientBlock src={Limo} height={130} />
                        <ClientBlock src={Nasdaq} height={102} />
                        <ClientBlock src={Bbva} height={84} />
                        <ClientBlock src={BnpParibas} height={120} />
                        <ClientBlock src={Santander} height={120} />
                    </Row>
                </PresentationalContainer>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOff: () => dispatch(actions.authPageOff()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
