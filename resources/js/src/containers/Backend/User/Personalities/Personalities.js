import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faCalendarAlt, faDownload, faSpinner, faTimesCircle, faCheckCircle, faFileArchive, faFilePdf, faFileImage, faUser, faBook, faCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import View from '../../../../components/Backend/UI/View/View';

import Edit from './Edit';
import PersonalityView from './View';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate } from '../../../../shared/utility';

class Personalities extends Component {
    componentDidMount() {
        this.props.onGetPersonalities();
    }

    componentWillUnmount() {
        this.props.onResetPersonalities();
    }

    render() {
        let { backend: { personalities: { loading, error, message, personalities } } } = this.props;

        let content;
        let errors;
        let feedback;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (personalities) {
                feedback = <Feedback message={message} />;

                const personalitiesOptions = personalities.map(personality => {
                    const viewContent = <PersonalityView personality={personality} />;

                    const editContent = <Edit personality={personality} />;

                    return updateObject(personality, {
                        created_at: convertDate(personality.created_at),
                        action: <div className="text-center">
                            <View title={'Personality details: ' + personality.ref} content={viewContent}>
                                <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                            </View>
                            <View title={'Personality edit: ' + personality.ref} content={editContent}>
                                <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                            </View>
                            <Delete deleteAction={() => this.props.onPostPersonalitiesDelete(personality.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                        </div>,
                    });
                });

                content = (
                    <>
                        <Row>
                            <List array={personalitiesOptions} data={JSON.stringify(personalities)} bordered icon={faCalendarAlt} title="Personalities" className="bg-white shadow-sm"
                                fields={[
                                    { name: 'User ID', key: 'ref' },
                                    { name: 'Full Name', key: 'name' },
                                    { name: 'Title', key: 'title' },
                                    { name: 'Creation Date', key: 'created_at' },
                                    { name: 'Action', key: 'action' }
                                ]} />
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-white py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main="Personalities" icon={faCalendarAlt} />
                    <SpecialTitle user icon={faCalendarAlt}>User panel</SpecialTitle>
                    <Subtitle user>Personalities</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onGetPersonalities: () => dispatch(actions.getPersonalities()),
    onPostPersonalityDelete: id => dispatch(actions.postPersonalityDelete(id)),
    onPostPersonalityUpdate: (id, data) => dispatch(actions.postPersonalityUpdate(id, data)),
    onResetPersonalities: () => dispatch(actions.resetPersonalities()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Personalities));