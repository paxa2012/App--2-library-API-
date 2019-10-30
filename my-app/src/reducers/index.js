import { combineReducers } from 'redux';
import addUsers from './users';
import ActiveUser from './activeuser';
//console.log(addUsers);


export const allReducers = combineReducers({
    users: addUsers,
    userA: ActiveUser
})
 