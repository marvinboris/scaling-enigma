import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faUser, faBook, faFilePdf, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Input, Alert, Button, UncontrolledCollapse, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';

import TinyMCE from '../../../../components/UI/TinyMCE/TinyMCE';
import Download from '../../../../components/Backend/UI/Download/Download';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

const parser = new Parser();

class Edit extends Component {
    state = {
        page_status: '',
        status: 0,
        comments: '',
        admin_files: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.request && prevState.page_status === '') return updateObject(prevState, { ...nextProps.request });
        return prevState;
    }

    inputChangedHandler = e => {
        const { name, value, files, targetElm } = e.target;
        if (targetElm) {
            document.getElementById(targetElm.id).value = e.target.getContent();
            return this.setState({ [targetElm.name]: e.target.getContent() });
        }
        if (name === 'admin_files') return this.setState({ [name]: files });
        this.setState({ [name]: value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onPostRequestUpdate(e.target.id, e.target);
    }

    render() {
        const { page_status, status, comments, admin_files, id } = this.state;
        let { request, country } = this.props;
        const colors = ['orange', 'primary', 'danger', 'success'];

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

        let additionalContent;
        switch (request.status) {
            case 0:
                additionalContent = <>
                    <Button color="green">Confirm<FontAwesomeIcon icon={faCheck} fixedWidth className="ml-2" /></Button>{' '}
                    <Button color="danger">Cancel<FontAwesomeIcon icon={faTimes} fixedWidth className="ml-2" /></Button>
                </>;
                break;
            case 1:
                additionalContent = <>
                    <Alert color={colors[request.status]} className={'pb-3'}>This request is under process. Would you like to update it?</Alert>

                    <Button color="green">Yes<FontAwesomeIcon icon={faCheck} fixedWidth className="ml-2" /></Button>{' '}
                    <Button color="danger">No<FontAwesomeIcon icon={faTimes} fixedWidth className="ml-2" /></Button>
                </>;
                break;
        }

        return <Form id={id} onSubmit={this.submitHandler}>
            <FormGroup className="d-flex align-items-center">
                <div className='text-700 pr-4'>Status</div>
                <Label check>
                    <CustomInput type="radio" name="status" id="status-3" onChange={this.inputChangedHandler} value={3} defaultChecked={request.status === 3} className={request.status === 3 ? 'text-700 text-' + colors[request.status] : ''} label="Solved" inline />
                </Label>
                <Label check>
                    <CustomInput type="radio" name="status" id="status-2" onChange={this.inputChangedHandler} value={1} defaultChecked={request.status === 1} className={request.status === 1 ? 'text-700 text-' + colors[request.status] : ''} label="Processing" inline />
                </Label>
                <Label check>
                    <CustomInput type="radio" name="status" id="status-1" onChange={this.inputChangedHandler} value={2} defaultChecked={request.status === 2} className={request.status === 2 ? 'text-700 text-' + colors[request.status] : ''} label="Cancelled" inline />
                </Label>
            </FormGroup>
            <FormGroup>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="text-700">Details</span>

                        <FontAwesomeIcon icon={faCaretSquareDown} id="toggler" style={{ cursor: 'pointer' }} />
                    </div>
                    <UncontrolledCollapse toggler="#toggler">
                        <div className="pt-2">
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
                                {request.hash && <I label="Hash">{request.hash}</I>}
                                {request.pack_ids && <I label="Package IDs">{request.pack_ids}</I>}
                            </Row>

                            <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
                                <Col xs={12}>
                                    <div className="d-flex justify-content-between">
                                        <div className="text-orange text-700 mb-2">
                                            <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                                        User documents
                                    </div>
                                    </div>
                                    <hr />
                                </Col>
                                <Col xs={12}>
                                    <Row>
                                        {documentsContent}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </UncontrolledCollapse>
                </div>
            </FormGroup>
            <FormGroup>
                <Label className="text-700" for="description">Issue description</Label>
                <div className="bg-soft rounded p-3">{parser.parse(request.description)}</div>
            </FormGroup>
            {(+request.status < 2 && +status > 0) && <>
                <FormGroup>
                    <Label className="text-700" for="comments">{+status === 2 ? 'Reason' : 'Reply'}</Label>
                    {/* <TinyMCE name="comments" onChange={this.inputChangedHandler} value={comments} /> */}
                    <Input type="textarea" name="comments" value={comments} onChange={this.inputChangedHandler} className="border-light text-secondary" />
                </FormGroup>
                <FormGroup>
                    <Label className="text-700" for="admin_files">Attach files</Label>
                    <CustomInput type="file" id="admin_files" name="admin_files[]" multiple accept=".png,.jpg,.jpeg,.pdf" onChange={this.inputChangedHandler} files={admin_files} />
                </FormGroup>
            </>}
            <input type="hidden" name="page_status" value={page_status} />

            <div className="mt-4">
                {additionalContent}
            </div>
        </Form>;
    }
}

const mapDispatchToProps = dispatch => ({
    onPostRequestUpdate: (id, data) => dispatch(actions.postRequestUpdate(id, data)),
});

export default withRouter(connect(null, mapDispatchToProps)(Edit));