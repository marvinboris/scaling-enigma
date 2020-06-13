import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    request: {
        loading: false,
        error: null
    },
    chat: {
        loading: false,
        error: null,
        hash: null,
        token: null,
    },
};

const resetRequest = (state, action) => updateObject(state, { request: initialState.request });
const requestStart = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: true, message: null }) });
const requestSuccess = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: false, error: null, ...action }) });
const requestFail = (state, action) => updateObject(state, { request: updateObject(state.request, { loading: false, ...action }) });

const resetChat = (state, action) => updateObject(state, { chat: initialState.chat });
const resendChatCodeSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { error: null, loading: false, ...action }) });
const chatCloseSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { error: null, loading: false, token: null }) });
const setChatHash = (state, action) => updateObject(state, { chat: updateObject(state.chat, { hash: action.hash }) });
const chatStart = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: true, message: null }) });
const chatSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null, ...action }) });
const chatMessageSuccess = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, error: null }) });
const chatFail = (state, action) => updateObject(state, { chat: updateObject(state.chat, { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET_REQUEST: return resetRequest(state, action);
        case actionTypes.REQUEST_START: return requestStart(state, action);
        case actionTypes.REQUEST_SUCCESS: return requestSuccess(state, action);
        case actionTypes.REQUEST_FAIL: return requestFail(state, action);

        case actionTypes.RESET_CHAT: return resetChat(state, action);
        case actionTypes.RESEND_CHAT_CODE_SUCCESS: return resendChatCodeSuccess(state, action);
        case actionTypes.CHAT_CLOSE_SUCCESS: return chatCloseSuccess(state, action);
        case actionTypes.SET_CHAT_HASH: return setChatHash(state, action);
        case actionTypes.CHAT_START: return chatStart(state, action);
        case actionTypes.CHAT_SUCCESS: return chatSuccess(state, action);
        case actionTypes.CHAT_MESSAGE_SUCCESS: return chatMessageSuccess(state, action);
        case actionTypes.CHAT_FAIL: return chatFail(state, action);

        default: return state;
    }
};