import React, { Component } from 'react';

import NavbarContainer from '../NavbarContainer/NavbarContainer';
import { connect } from 'react-redux';
import { whoami } from '../../actions/AppActions';

class AppContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(whoami()); //Initially Check if the user is logged in or something
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
        user: store.user
    };
})(AppContainer);
