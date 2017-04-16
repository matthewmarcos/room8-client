import React, { Component } from 'react';

import NavbarContainer from '../NavbarContainer/NavbarContainer';
import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';

class AppContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(appActions.whoami()); //Initially Check if the user is logged in or something
        dispatch(appActions.getEverything());
    }

    render() {
        return (
            <div className="app-container">
                <NavbarContainer />
                { this.props.children || 'App Container goes here!' }
            </div>
        );
    }
}

export default connect(store => {
    return {
        user: store.user,
        isFetchingData: store.app.isLoading
    };
})(AppContainer);
