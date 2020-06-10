import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit, faBook, faFileImage, faUser } from '@fortawesome/free-solid-svg-icons';
import Download from '../../../../components/Backend/UI/Download/Download';
import { Row, Col } from 'reactstrap';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

export default ({ request, country }) => {
    const documentsContent = request.documents.filter(d => d).map(doc => {
        const arr1 = doc.split('.');
        const format = arr1[arr1.length - 1];

        const arr2 = doc.split('/');
        const arr3 = arr2[arr2.length - 1].split('.');
        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');


        let content;
        switch (format.toLowerCase()) {
            case 'pdf':
                content = <FontAwesomeIcon icon={faFilePdf} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
            default:
                content = <div className="embed-responsive embed-responsive-1by1 position-absolute" style={{ background: 'url("' + doc + '") no-repeat center', backgroundSize: 'cover', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
                break;
        }

        return <Col xl={3} key={formatlessName + Math.random()} className="pr-0" style={{ minWidth: 100 }}>
            <a target="_blank" href={doc} className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                {content}
            </a>
            <Download link={doc} name={formatlessName + '.' + format}>
                <div className="text-uppercase text-truncate pt-3 text-darkblue">
                    {formatlessName}
                </div>
            </Download>
        </Col>
    });

    const issueFilesContent = request.issue_files.filter(d => d).map(issue_file => {
        const arr1 = issue_file.split('.');
        const format = arr1[arr1.length - 1];

        const arr2 = issue_file.split('/');
        const arr3 = arr2[arr2.length - 1].split('.');
        const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');

        let icon;
        switch (format.toLowerCase()) {
            case 'pdf':
                icon = faFilePdf
                break;
            default:
                icon = faFileImage
                break;
        }

        return <div key={formatlessName + Math.random()} className="pr-3 d-inline-block" style={{ maxWidth: 200 }}>
            <Download link={issue_file} name={formatlessName + '.' + format}>
                <div className="rounded-2 p-2 bg-light text-darkblue text-uppercase text-truncate text-nowrap">
                    <FontAwesomeIcon icon={icon} className="mr-2" />{formatlessName}
                </div>
            </Download>
        </div>
    });

    return <>
        <Row className="m-0 p-3 rounded bg-green-20">
            <Col xs={12}>
                <div className="text-green text-700 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" fixedWidth />
                        User info Gathering
                    </div>
                <hr />
            </Col>
            <I label="Full Name">{request.name}</I>
            <I label="Platform">{request.platform}</I>
            <I label="E-Mail Address">{request.email}</I>
            <I label="User ID">{request.ref}</I>
            <I label="Country">{country ? country.name : null}</I>
            <I label="Phone Number">{request.phone}</I>
            <I label="Issue">{request.issue}</I>
        </Row>

        <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
            <Col xs={12}>
                <div className="text-orange text-700 mb-2">
                    <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                    User documents
                </div>
                <hr />
            </Col>
            <Col xs={12}>
                <Row>
                    {documentsContent}
                </Row>
            </Col>
        </Row>

        <Row className="mt-4 mx-0 p-3 rounded bg-soft">
            <Col xs={12}>
                <div className="text-black text-700 mb-2">
                    <FontAwesomeIcon icon={faEdit} className="mr-2" fixedWidth />
                        Issue description
                    </div>
                <hr />
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={12} className="pb-3" dangerouslySetInnerHTML={{ __html: request.description }} />
                    <Col xl={12}>{issueFilesContent}</Col>
                </Row>
            </Col>
        </Row>
    </>;
}