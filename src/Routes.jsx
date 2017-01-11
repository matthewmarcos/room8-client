import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './redux/store';

import AppContainer from './containers/AppContainer/AppContainer';
import LandingContainer from './containers/LandingContainer/LandingContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer';
import ForgotContainer from './containers/ForgotContainer/ForgotContainer';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer';
// import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import PreferencesContainer from './containers/PreferencesContainer/PreferencesContainer';

import NoMatch from './components/NoMatch/NoMatch';
import PreferencesCost from './components/PreferencesCost/PreferencesCost';
import PreferencesIndex from './components/PreferencesIndex/PreferencesIndex';
import PreferencesLifestyle from './components/PreferencesLifestyle/PreferencesLifestyle';
import PreferencesLocation from './components/PreferencesLocation/PreferencesLocation';
import PreferencesUtilities from './components/PreferencesUtilities/PreferencesUtilities';
import PreferencesWhen from './components/PreferencesWhen/PreferencesWhen';


import ProfileIndex from './components/ProfileIndex/ProfileIndex';
import ProfileEdit from './components/ProfileEdit/ProfileEdit';

const Routes = (props) => {
    return (
        <Provider store={store} key="provider">
            <Router history={browserHistory}>

                <Route path="/" component={AppContainer}>
                    <IndexRoute component={LandingContainer} />
                    <Route path="login" component={LoginContainer} />
                    <Route path="register" component={RegisterContainer} />
                    <Route path="forgot" component={ForgotContainer} />
                    <Route path="forgot" component={ForgotContainer} />

                    <Route path="profile" component={ProfileContainer}>
                        <IndexRoute component={ProfileIndex} />
                        <Route path="edit" component={ProfileEdit} />
                    </Route>

                    <Route path="/preferences" component={PreferencesContainer}>
                        <IndexRoute component={PreferencesIndex} />
                        <Route path="when" component={PreferencesWhen} />
                        <Route path="cost" component={PreferencesCost} />
                        <Route path="location" component={PreferencesLocation} />
                        <Route path="utilities" component={PreferencesUtilities} />
                        <Route path="lifestyle" component={PreferencesLifestyle} />
                    </Route>

                </Route>

                <Route path={'*'} component={NoMatch}/>

            </Router>
        </Provider>
    );
};

export default Routes;
