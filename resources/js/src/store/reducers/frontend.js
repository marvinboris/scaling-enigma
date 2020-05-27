import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    request: {
        loading: false,
        error: null
    },
};

const resetRequest = (state, action) => updateObject(state, { request: initialState.request });
const requestStart = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: true, message: null }) });
const requestSuccess = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: false, error: null, ...action }) });
const requestFail = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_REQUEST: return resetRequest(state, action);
        case actionTypes.REQUEST_START: return requestStart(state, action);
        case actionTypes.REQUEST_SUCCESS: return requestSuccess(state, action);
        case actionTypes.REQUEST_FAIL: return requestFail(state, action);

        default: return state;
    }
};