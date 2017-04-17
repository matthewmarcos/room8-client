import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { whoami } from '../actions/AppActions';

import Forbidden from  '../components/Forbidden/Forbidden';

class LoginRequired extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        // const { currentUrl } = this.props;
        const { isLoggedIn } = this.props.user;

        dispatch(whoami()); //Initially Check if the user is logged in or something
    }


    componentWillReceiveProps(nextProps) {
        const { isLoggedIn } = nextProps.user;

        if(!isLoggedIn) {
            browserHistory.push('/login');
        }
    }


    render() {
        return this.props.children;
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        currentURL: ownProps.location.pathname
    };
};


export default connect(mapStateToProps)(LoginRequired);

