import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    dashboard: {
        loading: false,
        error: null
    },
    requests: {
        loading: false,
        statusLoading: false,
        error: null
    },
    chat: {
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
const requestsStatusStart = (state, action) => updateObject(state, { requests: updateObject(state.requests, { statusLoading: true }) });
const requestsSuccess = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, statusLoading: false, error: null, ...action }) });
const requestsFail = (state, action) => updateObject(state, { requests: updateObject(state.requests, { loading: false, statusLoading: false, ...action }) });

const resetChat = (state, action) => updateObject(state, { chat: initialState.chat });
const chatStart = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: true, message: null }) });
const chatSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null, ...action }) });
const chatMessageSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null }) });
const chatFail = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_DASHBOARD: return resetDashboard(state, action);
        case actionTypes.DASHBOARD_START: return dashboardStart(state, action);
        case actionTypes.DASHBOARD_SUCCESS: return dashboardSuccess(state, action);
        case actionTypes.DASHBOARD_FAIL: return dashboardFail(state, action);

        case actionTypes.RESET_REQUESTS: return resetRequests(state, action);
        case actionTypes.REQUESTS_START: return requestsStart(state, action);
        case actionTypes.REQUESTS_STATUS_START: return requestsStatusStart(state, action);
        case actionTypes.REQUESTS_SUCCESS: return requestsSuccess(state, action);
        case actionTypes.REQUESTS_FAIL: return requestsFail(state, action);

        case actionTypes.RESET_B_CHAT: return resetChat(state, action);
        case actionTypes.B_CHAT_START: return chatStart(state, action);
        case actionTypes.B_CHAT_SUCCESS: return chatSuccess(state, action);
        case actionTypes.B_CHAT_MESSAGE_SUCCESS: return chatMessageSuccess(state, action);
        case actionTypes.B_CHAT_FAIL: return chatFail(state, action);

        default: return state;
    }
};