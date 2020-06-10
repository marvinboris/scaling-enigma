import * as actionTypes from './actionTypes';

const prefix = '/api/frontend/';

export const resetRequest = () => ({ type: actionTypes.RESET_REQUEST });
const requestStart = () => ({ type: actionTypes.REQUEST_START });
const requestSuccess = data => ({ type: actionTypes.REQUEST_SUCCESS, ...data });
const requestFail = error => ({ type: actionTypes.REQUEST_FAIL, error });
export const getRequest = () => async dispatch => {
    dispatch(requestStart());

    try {
        const res = await fetch(prefix + 'request');
        const resData = await res.json();
        dispatch(requestSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestFail(error));
    }
};

export const postRequest = data => async dispatch => {
    dispatch(requestStart());

    try {
        const form = new FormData(data);
        const res = await fetch(prefix + 'request', {
            method: 'POST',
            body: form
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestFail(error));
    }
};

export const postCheckRequest = data => async dispatch => {
    dispatch(requestStart());

    try {
        const form = new FormData(data);
        const res = await fetch(prefix + 'request/check', {
            method: 'POST',
            body: form
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestFail(error));
    }
};




export const resetChat = () => ({ type: actionTypes.RESET_CHAT });
const chatStart = () => ({ type: actionTypes.CHAT_START });
const chatSuccess = data => ({ type: actionTypes.CHAT_SUCCESS, ...data });
const chatCloseSuccess = () => {
    localStorage.removeItem('chatToken');
    localStorage.removeItem('chatExpirationDate');
    return {
        type: actionTypes.CHAT_CLOSE_SUCCESS
    };
};
const resendChatCodeSuccess = (hash, message) => ({ type: actionTypes.RESEND_CHAT_CODE_SUCCESS, hash, message });
const chatFail = error => ({ type: actionTypes.CHAT_FAIL, error });
export const getRoom = token => async dispatch => {
    dispatch(chatStart());

    try {
        const res = await fetch(prefix + 'chat?=' + token);
        const resData = await res.json();
        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const postReqid = data => async dispatch => {
    dispatch(chatStart());

    try {
        const form = new FormData(data);
        const res = await fetch(prefix + 'chat/reqid', {
            method: 'POST',
            body: form
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(chatSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(chatFail(error));
    }
};

export const setChatHash = hash => ({ type: actionTypes.SET_CHAT_HASH, hash });

export const resendChatCode = hash => async dispatch => {
    dispatch(authStart());

    try {
        const formData = new FormData();
        formData.append('hash', hash);

        const res = await fetch(prefix + 'chat/resend', {
            method: 'POST',
            body: formData,
        });

        const resData = await res.json();

        dispatch(resendChatCodeSuccess(resData.hash, resData.message));
    } catch (err) {
        dispatch(authFail());
    }
};

export const chatClose = () => dispatch => {
    dispatch(chatStart());
    dispatch(chatCloseSuccess());
};

const checkChatTimeout = (expirationTime) => dispatch => {
    setTimeout(() => {
        dispatch(chatClose());
    }, expirationTime);
};

export const postChatVerify = data => async dispatch => {
    dispatch(chatStart());

    try {
        const form = new FormData(data);

        const res = await fetch(prefix + 'chat/verify', {
            method: 'POST',
            body: form,
        });

        const resData = await res.json();

        let { token, expires_at } = resData;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        // else if (res.status === 403 || res.status === 401) return dispatch(chatMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData);

        const chatExpirationDate = new Date(expires_at);
        localStorage.setItem('chatToken', token);
        localStorage.setItem('chatExpirationDate', chatExpirationDate);
        dispatch(chatSuccess(resData));
        dispatch(checkChatTimeout(expires_at - new Date().getTime()));
    } catch (err) {
        dispatch(chatFail(err));
    }
};

export const chatCheckState = () => async dispatch => {
    dispatch(chatStart());
    const token = localStorage.getItem('chatToken');
    if (!token) dispatch(chatCloseSuccess());
    else {
        try {
            const res = await fetch(prefix + 'chat/check?token=' + token);

            const resData = await res.json();

            if (res.status === 521) await dispatch(chatCloseSuccess());
            else if (res.status !== 200 && res.status !== 201) throw new Error(resData);

            const expirationDate = new Date(localStorage.getItem('chatExpirationDate'));
            if (expirationDate > new Date()) {
                dispatch(chatSuccess(resData));
                dispatch(checkChatTimeout(expirationDate.getTime() - new Date().getTime()));
            } else dispatch(chatCloseSuccess());
        } catch (err) {
            console.log(err)
            dispatch(chatFail(err));
        }
    }
};