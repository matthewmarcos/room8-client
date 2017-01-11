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

const Routes = (props) => {
    return (
        <Provider store={store} key="provider">
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={LandingContainer} />
                    <Route path="login" component={LoginContainer} />
                    <Route path="register" component={RegisterContainer} />
                    <Route path="forgot" component={ForgotContainer} />
                    <Route path="profile" component={ProfileContainer}>
                    </Route>
                    <Route path="preferences" component={PreferencesContainer} />
                </Route>
                <Route path={'*'} component={NoMatch}/>
            </Router>
        </Provider>
    );
};

export default Routes;
