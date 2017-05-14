import { combineReducers } from 'redux';

import { userReducer } from './UserReducer';
import { preferencesReducer } from './PreferencesReducer';
import { appReducer } from './AppReducer';
import { matchesReducer } from './MatchesReducer';
import { pairingReducer } from './PairingReducer';

const reducers = combineReducers({
    app: appReducer,
    user: userReducer,
    preferences: preferencesReducer,
    matches: matchesReducer,
    pairing: pairingReducer
});

export default reducers;
