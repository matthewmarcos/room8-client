import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { whoami } from '../actions/AppActions';

import Forbidden from  '../components/Forbidden/Forbidden';

class LoginRequired extends Component {
    componentDidMount() {
        const { dispatch, currentURL } = this.props;
        const { isLoggedIn } = this.props.user;

        dispatch(whoami()); //Initially Check if the user is logged in or something

        if (!isLoggedIn) {
            // set the current url/path for future redirection (we use a Redux action)
            // then redirect (we use a React Router method)
            // dispatch(setRedirectUrl(currentURL))
            // browserHistory.replace('/login');
        }
    }

    render() {
        const { isLoggedIn } = this.props.user;
        console.log(isLoggedIn)

        if(isLoggedIn) {
            return this.props.children;
        }
        else {
            // Band-aid solution
            return (<Forbidden/>);
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        currentURL: ownProps.location.pathname
    };
};

export default connect(mapStateToProps)(LoginRequired);
