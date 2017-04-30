import React from 'react';
import { connect } from 'react-redux';
import NoMatchesYet from '../components/NoMatchesYet/NoMatchesYet';
import MatchesContainer from '../containers/MatchesContainer/MatchesContainer';

const DashboardWrapper = (props) => {
// Check if the user has matches available before rendering the appropriate component
    if(!props) {
        return null;
    }

    return (props.matches.length > 0) ? <MatchesContainer/> : <NoMatchesYet/>;
};


export default connect((store) => {
    return {
        myStatus: store.matches.myStatus,
        matches: store.matches.matches
    };
})(DashboardWrapper);

