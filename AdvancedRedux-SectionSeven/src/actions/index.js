import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FEATURE_MESSAGE,
} from './types';
const ROOT_URL = 'http://localhost:3090';

function processAuthResponse(dispatch, response) {
    dispatch({ type: AUTH_USER });
    localStorage.setItem('token', response.data.token);
    browserHistory.push('/feature');
}

export function signinUser({email, password}) {
    return dispatch => {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then((response) => {
                processAuthResponse(dispatch, response);
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({email, password}) {
    return dispatch => {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                processAuthResponse(dispatch, response);
            }).catch(({response}) => {
                console.log(response);
                dispatch(authError(response.data.error));
            });
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER,
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error,
    }
}

export function fetchMessage() {
    return dispatch => {
        axios.get(ROOT_URL, {
            headers: {
                authorization: localStorage.getItem('token'),
            }
        })
            .then(response => {
                dispatch({
                    type: FEATURE_MESSAGE,
                    payload: response.data.message,
                })
            });
    };
}