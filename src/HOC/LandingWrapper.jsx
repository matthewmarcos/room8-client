import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Redirect, Route } from 'react-router';
import LandingContainer from '../containers/LandingContainer/LandingContainer';
import DashboardContainer from '../containers/DashboardContainer/DashboardContainer';

const LandingWrapper = (props) => {
    const { isLoggedIn } = props.user;

    return isLoggedIn ? <DashboardContainer/> : <LandingContainer/>;
};


export default connect((store) => {
    return {
        user: store.user
    };
})(LandingWrapper);

