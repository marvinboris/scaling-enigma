import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { faCheck, faTimes, faUser, faBook, faFilePdf, faCaretSquareDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Label, CustomInput, Form, Input, Alert, Button, UncontrolledCollapse, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parser } from 'html-to-react';

import MyInput from '../../../../components/UI/Input/Input';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

const parser = new Parser();

class Edit extends Component {
    state = {
        name: '',
        ref: '',
        photo: null,
        title_id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.personality && prevState.name === '') return updateObject(prevState, { ...nextProps.personality });
        return prevState;
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
        this.props.onPostPersonalityUpdate(e.target.id, e.target);
    }

    render() {
        const { name, ref, title_id, id } = this.state;
        const { backend: { personalities: { titles } } } = this.props;

        const titlesOptions = titles.sort((a, b) => a.name > b.name).map(({ id, name }) => <option key={name + id} value={id}>{name}</option>);

        return <Form id={id} onSubmit={this.submitHandler}>
            <Row>
                <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={name} validation={{ required: true }} name="name" placeholder="Full Name" required />
                <MyInput className="col-md-6" type="select" onChange={this.inputChangeHandler} value={title_id} validation={{ required: true, isNumeric: true }} name="title_id" placeholder="Select Title" required>
                    <option>Select Title</option>
                    {titlesOptions}
                </MyInput>
                <MyInput className="col-md-6" type="file" name="photo" placeholder="Photo" />
                <MyInput className="col-md-6" type="text" onChange={this.inputChangeHandler} value={ref} validation={{ required: true, minLength: 6, maxLength: 6 }} name="ref" placeholder="User ID" required />

                <FormGroup className="col-12 m-0">
                    <BetweenButton icon={faPaperPlane} pill className="py-3 px-4 text-truncate" color="darkblue">Submit</BetweenButton>
                </FormGroup>
            </Row>
        </Form>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onPostPersonalityUpdate: (id, data) => dispatch(actions.postPersonalityUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));