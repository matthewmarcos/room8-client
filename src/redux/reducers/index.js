import { combineReducers } from 'redux';

import { userReducer } from './UserReducer';
import { preferencesReducer } from './PreferencesReducer';
import { appReducer } from './AppReducer';

const reducers = combineReducers({
    app: appReducer,
    user: userReducer,
    preferences: preferencesReducer
});

export default reducers;
