import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { StyleRoot } from 'radium';

import store from './redux/store';

// Containers
import AppContainer from './containers/AppContainer/AppContainer';
// import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import DiscoveryContainer from './containers/DiscoveryContainer/DiscoveryContainer';
import ForgotContainer from './containers/ForgotContainer/ForgotContainer';
import LandingContainer from './containers/LandingContainer/LandingContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer';
import PreferencesContainer from './containers/PreferencesContainer/PreferencesContainer';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';

// Components
import NoMatch from './components/NoMatch/NoMatch';

import PreferencesCost from './components/PreferencesCost/PreferencesCost';
import PreferencesIndex from './components/PreferencesIndex/PreferencesIndex';
import PreferencesLifestyle from './components/PreferencesLifestyle/PreferencesLifestyle';
import PreferencesLocation from './components/PreferencesLocation/PreferencesLocation';
import PreferencesUtilities from './components/PreferencesUtilities/PreferencesUtilities';
import PreferencesWhen from './components/PreferencesWhen/PreferencesWhen';
import PreferencesMisc from './components/PreferencesMisc/PreferencesMisc';
import PreferencesSex from './components/PreferencesSex/PreferencesSex';

import ProfileEdit from './components/ProfileEdit/ProfileEdit';
import ProfileIndex from './components/ProfileIndex/ProfileIndex';

// HOC
import LoginRequired from './HOC/LoginRequired';
import NotLoggedIn from './HOC/NotLoggedIn';
import LandingWrapper from './HOC/LandingWrapper';

import { SampleComponent } from './yeah';

const Routes = (props) => {
    return (
        <Provider store={store} key="provider">
            <StyleRoot>
                <Router history={browserHistory}>
                    <Route path="/" component={AppContainer}>
                        {/* / */}
                        {/* /login, /register, /forgot, /discovery */}
                        <IndexRoute component={LandingWrapper}/>
                        <Route component={NotLoggedIn}>
                            <Route path="login" component={LoginContainer} />
                            <Route path="register" component={RegisterContainer} />
                            <Route path="forgot" component={ForgotContainer} />
                        </Route>

                        <Route component={LoginRequired}>
                            <Route path="discovery" component={DiscoveryContainer} />
                            <Route path="profile" component={ProfileContainer}>
                                <IndexRoute component={ProfileIndex} /> {/* /profile */}
                                <Route path="edit" component={ProfileEdit} /> {/* /profile/edit */}
                            </Route>
                            <Route path="preferences" component={PreferencesContainer}>
                                {/* /preferences */}
                                <IndexRoute component={PreferencesIndex} />
                                {/* /preferences/when
                                    /preferences/cost
                                    /preferences/location
                                    /preferences/utilities
                                    /preferences/lifestyle
                                */}
                                <Route path="when" component={PreferencesWhen} />
                                <Route path="cost" component={PreferencesCost} />
                                <Route path="misc" component={PreferencesMisc} />
                                <Route path="sex" component={PreferencesSex} />
                                <Route path="location" component={PreferencesLocation} />
                                <Route path="utilities" component={PreferencesUtilities} />
                                <Route path="lifestyle" component={PreferencesLifestyle} />
                            </Route>
                        </Route>
                        <Route path="instructions" component={SampleComponent}/>
                    </Route>

                    {/* 404 page */}
                    <Route path={'*'} component={NoMatch}/>
                </Router>
            </StyleRoot>
        </Provider>
    );
};

export default Routes;
                        // <Route component={NotLoggedIn}>
                        // </Route>
