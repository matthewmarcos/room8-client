import { combineReducers } from 'redux';

import { userReducer } from './UserReducer';
import { preferencesReducer } from './PreferencesReducer';

const reducers = combineReducers({
    user: userReducer,
    preferences: preferencesReducer
});

export default reducers;
