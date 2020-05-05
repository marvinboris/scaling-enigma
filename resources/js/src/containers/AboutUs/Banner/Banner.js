import React from 'react';
import { Col } from 'reactstrap';

import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import WithPoint from '../../../components/UI/WithPoint/WithPoint';

import Man from '../../../assets/images/22654-6-man@2x.png';

const aboutUsBanner = ({ children, className }) =>
    <PresentationalContainer user bg="green-radial-gradient" innerClassName="position-relative">
        <Breadcrumb main="About Us" />
        <div className="d-flex justify-content-center py-5">
            <Col xs={10} sm={9} md={6} lg={6} xl={5} className="text-white py-5">
                <WithPoint color="orange">
                    <h2>
                        Who we are ?
                    </h2>
                </WithPoint>
                <div className="mt-5 text-300 text-small">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                </div>
            </Col>
        </div>
        <div className="position-absolute d-flex flex-column align-items-end" style={{ height: 'calc(90% + 16px)', bottom: -16, right: '5%', opacity: .3 }}>
            <img src={Man} className="flex-fill" />
        </div>
        <div className="position-absolute d-flex flex-column align-items-end" style={{ height: 'calc(45% + 16px)', bottom: -16, right: 'calc(15% + 16px)' }}>
            <img src={Man} className="flex-fill" />
        </div>
    </PresentationalContainer>;
    
export default aboutUsBanner;