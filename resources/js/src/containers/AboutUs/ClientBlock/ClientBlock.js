import React from 'react';
import { Col } from 'reactstrap';

const clientBlock = ({ src, animation = "fade-up", height }) =>
    <Col data-aos={animation} className="text-center">
        <img src={src} style={{ height }} />
    </Col>;

export default clientBlock;