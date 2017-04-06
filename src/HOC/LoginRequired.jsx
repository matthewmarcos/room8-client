import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginRequired extends component {
    onComponentdidmount() {
        const { dispatch, currentURL } = this.props;

        if (!isLoggedIn) {
            // set the current url/path for future redirection (we use a Redux action)
            // then redirect (we use a React Router method)
            dispatch(setRedirectUrl(currentURL))
            browserHistory.replace('/login');
        }
    }

    render() {
        if(user.isLoggedIn) {
            return this.props.children;
        }
        else {
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

export default connect(mapStateToProps)(LoginRequired);
