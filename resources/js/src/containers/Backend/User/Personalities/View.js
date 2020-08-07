import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import Download from '../../../../components/Backend/UI/Download/Download';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

class View extends Component {
    render() {
        let { personality } = this.props;

        const arr1 = personality.photo.split('.');
        const format = arr1[arr1.length - 1];

        const arr2 = personality.photo.split('/');
        const arr3 = arr2[arr2.length - 1].split('.');
        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');

        let content;
        switch (format.toLowerCase()) {
            case 'pdf':
                content = <FontAwesomeIcon icon={faFilePdf} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
            default:
                content = <div className="embed-responsive embed-responsive-1by1 position-absolute" style={{ background: 'url("' + personality.photo + '") no-repeat center', backgroundSize: 'cover', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
        }

        const photo = <Col xl={3} key={formatlessName + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
            <a target="_blank" href={personality.photo} className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                    {content}
            </a>
        </Col>

        return <>
            <Row className="m-0 p-3 rounded bg-green-20">
                <Col xs={12}>
                    <div className="text-green text-700 mb-2">
                        <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                            User info Gathering
                        </div>
                    <hr />
                </Col>
                <I label="Full Name">{personality.name}</I>
                <I label="User ID">{personality.ref}</I>
                <I label="Title">{personality.title}</I>
            </Row>

            <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
                <Col xs={12}>
                    <div className="d-flex justify-content-between">
                        <div className="text-orange text-700 mb-2">
                            <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                            User photo
                        </div>
                    </div>
                    <hr />
                </Col>
                <Col xs={12}>
                    <Row>
                        {photo}
                    </Row>
                </Col>
            </Row>
        </>;
    }
}

export default withRouter(View);
