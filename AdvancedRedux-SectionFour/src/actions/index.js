import {CHANGE_AUTH} from './types';

export function authenticate(isLoggedIN){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIN
    }
}