import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './redux/store';

import AppContainer from './containers/AppContainer/AppContainer';
import LandingContainer from './containers/LandingContainer/LandingContainer';
import NoMatch from './components/NoMatch/NoMatch';

export default class Routes extends Component {
    render() {
        return (
            <Provider store={store} key="provider">
                <Router history={browserHistory}>
                    <Route path="/" component={AppContainer}>
                        <IndexRoute component={LandingContainer} />
                    </Route>
                    <Route path={'*'} component={NoMatch}/>
                </Router>
            </Provider>
        );
    }
}
