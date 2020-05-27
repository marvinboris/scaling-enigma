import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dashboard: {
        loading: false,
        error: null
    },
    requests: {
        loading: false,
        error: null
    },
};

const resetDashboard = (state, action) => updateObject(state, { dashboard: initialState.dashboard });
const dashboardStart = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: true, message: null }) });
const dashboardSuccess = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, error: null, ...action }) });
const dashboardFail = (state, action) => updateObject(state, { dashboard: updateObject(state.dashboard, { loading: false, ...action }) });

const resetRequests = (state, action) => updateObject(state, { requests: initialState.requests });
const requestsStart = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: true, message: null }) });
const requestsSuccess = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, error: null, ...action }) });
const requestsFail = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_DASHBOARD: return resetDashboard(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.RESET_REQUESTS: return resetRequests(state, action);
        case actionTypes.REQUESTS_START: return requestsStart(state, action);
        case actionTypes.REQUESTS_SUCCESS: return requestsSuccess(state, action);
        case actionTypes.REQUESTS_FAIL: return requestsFail(state, action);

        default: return state;
    }
};