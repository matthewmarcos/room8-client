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


    componentWillReceiveProps(nextProps) {
        const { isLoggedIn } = nextProps.user;

        console.log('isLoggedIn: ', isLoggedIn);
        if(isLoggedIn) {
            browserHistory.replace('/dashboard');
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


export default connect(mapStateToProps)(NotLoggedIn);

