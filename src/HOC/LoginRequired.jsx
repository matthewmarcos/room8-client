import React, { Component } from 'react';
import { connect } from 'react-redux';

const LoginRequired = (component) => {
    // Check the state of the user is logged in
    return connect((store) => {
        return {
            user: store.user
        };
    })(component);;
};


export default LoginRequired;
