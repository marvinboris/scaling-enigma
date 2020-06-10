import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Input, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';

import TinyMCE from '../../../../components/UI/TinyMCE/TinyMCE';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

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
        const { request } = this.props;
        const colors = ['orange', 'primary', 'danger', 'success'];

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
                <Label className="text-700" for="description">Issue description</Label>
                <div className="bg-soft rounded p-3">{parser.parse(request.description)}</div>
            </FormGroup>
            {(+request.status < 2 && +status > 0) && <>
                <FormGroup>
                    <Label className="text-700" for="comments">{+status === 2 ? 'Reason' : 'Reply'}</Label>
                    {/* <Input type="textarea" id="comments" name="comments" onChange={this.inputChangedHandler} style={{ height: 250 }} value={comments} /> */}
                    {/* <Jodit name="comments" /> */}
                    <TinyMCE name="comments" onChange={this.inputChangedHandler} value={comments} />
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