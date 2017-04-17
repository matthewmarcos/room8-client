import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Redirect } from 'react-router';

import { whoami } from '../actions/AppActions';

import Forbidden from  '../components/Forbidden/Forbidden';

class NotLoggedIn extends Component {
    componentDidMount() {
        const { dispatch, currentURL } = this.props;
        const { isLoggedIn } = this.props.user;
    }

    render() {
        const { isLoggedIn } = this.props.user;

        if(!isLoggedIn) {
            return this.props.children;
        }
        else {
            browserHistory.replace('/dashboard');
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        currentURL: ownProps.location.pathname
    };
};

export default connect(mapStateToProps)(NotLoggedIn);
