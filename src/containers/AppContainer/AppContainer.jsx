import React, { Component } from 'react';

import NavbarContainer from '../NavbarContainer/NavbarContainer';
import { connect } from 'react-redux';
import axios from 'axios';

class AppContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        const instance = axios.create({
            baseURL: 'http://localhost:3001',
            timeout: 10000
        });
        // instance.get('/get');
        // fetch('/post', {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ asd: 'asd'})
        // })
        // .then()
        dispatch({
            type: 'TEST_DISPATCH_FOR_CORS',
            payload: fetch('/get', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        });
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
