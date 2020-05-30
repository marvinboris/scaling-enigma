import * as actionTypes from './actionTypes';
import { rootPath } from '../..';

const prefix = '/frontend/';

export const resetRequest = () => ({ type: actionTypes.RESET_REQUEST });
const requestStart = () => ({ type: actionTypes.REQUEST_START });
const requestSuccess = data => ({ type: actionTypes.REQUEST_SUCCESS, ...data });
const requestFail = error => ({ type: actionTypes.REQUEST_FAIL, error });
export const getRequest = () => async dispatch => {
    dispatch(requestStart());

    try {
        const res = await fetch(rootPath + prefix + 'request', {
            method: 'GET',
        });
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
        const res = await fetch(rootPath + prefix + 'request', {
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
        const res = await fetch(rootPath + prefix + 'request/check', {
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