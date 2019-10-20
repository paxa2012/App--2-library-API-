import { combineReducers } from 'redux';
import addUsers from './users';
import ActiveUser from './activeuser';

export const allReducers = combineReducers({
    users: addUsers,
    userA: ActiveUser
})