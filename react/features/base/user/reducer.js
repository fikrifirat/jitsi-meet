import { ReducerRegistry } from '../redux';
import { SET_USER_INFO } from './actionTypes';

ReducerRegistry.register('features/base/user', (state = {}, action) => {
    switch (action.type) {
    case SET_USER_INFO:
        return {
            ...state,
            ...action.user
        };
    }

    return state;
});

