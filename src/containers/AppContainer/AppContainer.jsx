import React, { Component } from 'react';

import NavbarContainer from '../NavbarContainer/NavbarContainer';
import { connect } from 'react-redux';
import axios from 'axios';

class AppContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        // dispatch({
        //     type: 'TEST_DISPATCH_FOR_CORS',
        //     payload: axios.post('/post', {
        //         method: 'POST',
        //         credentials: 'include',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: {
        //             name: 'Matthew Marcos'
        //         }
        //     })
        // });
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
