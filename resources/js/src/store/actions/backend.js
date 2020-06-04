import * as actionTypes from './actionTypes';

const prefix = '/api/user/';

export const resetDashboard = () => ({ type: actionTypes.RESET_DASHBOARD });
const dashboardStart = () => ({ type: actionTypes.DASHBOARD_START });
const dashboardSuccess = data => ({ type: actionTypes.DASHBOARD_SUCCESS, ...data });
const dashboardFail = error => ({ type: actionTypes.DASHBOARD_FAIL, error });
export const getDashboard = () => async dispatch => {
    dispatch(dashboardStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'dashboard', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(dashboardSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(dashboardFail(error));
    }
};

export const resetRequests = () => ({ type: actionTypes.RESET_REQUESTS });
const requestsStart = () => ({ type: actionTypes.REQUESTS_START });
const requestsSuccess = data => ({ type: actionTypes.REQUESTS_SUCCESS, ...data });
const requestsFail = error => ({ type: actionTypes.REQUESTS_FAIL, error });
export const getRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getImportantRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/important', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getPendingRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/pending', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getSolvedRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/solved', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const getCancelledRequests = () => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(prefix + 'requests/cancelled', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const postRequestUpdate = (id, data) => async dispatch => {
    dispatch(requestsStart());

    try {
        const token = localStorage.getItem('token');
        const form = new FormData(data);
        const res = await fetch(prefix + 'requests/' + id, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};

export const postRequestDelete = id => async dispatch => {
    dispatch(requestsStart());

    try {
        const res = await fetch(prefix + 'requests/' + id + '/delete', {
            method: 'POST',
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        dispatch(requestsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(requestsFail(error));
    }
};