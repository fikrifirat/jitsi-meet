import { SET_USER_INFO } from './actionTypes';

/**
 * Sets user information.
 *
 * @param {Object} user - User object.
 * @returns {{
 *     type: 'SET_USER_INFO',
 *     user: Object
 * }}
 */
export function setUserInfo(user) {
    return {
        type: SET_USER_INFO,
        user
    };
}
