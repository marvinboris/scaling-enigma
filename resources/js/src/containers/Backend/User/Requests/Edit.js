import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions';

class Edit extends Component {
    state = {
        page_status: '',
        status: 0,
    }

    render() {
        
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onPostRequestUpdate: (id, data) => dispatch(actions.postRequestUpdate(id, data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));