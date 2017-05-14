import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoMatchesYet from '../components/NoMatchesYet/NoMatchesYet';
import MatchesContainer from '../containers/MatchesContainer/MatchesContainer';
import PairingContainer from '../containers/PairingContainer/PairingContainer';

class DashboardWrapper extends Component {

    constructor() {
        super();
    }


    componentWillReceiveProps(nextProps) {

    }

    render() {
        // Check if the user has matches available before rendering the appropriate component

        if(!this.props) {
            return null;
        }
        else if(this.props.pairing && this.props.pairing.pair) {
            return <PairingContainer/>;
        }
        else if(this.props.matches.length > 0) {
            return <MatchesContainer/>;
        }
        else {
            return <NoMatchesYet/>;
        }
    }

}

export default connect((store) => {

    return {
        myStatus: store.matches.myStatus,
        matches: store.matches.matches,
        pairing: store.pairing
    };
})(DashboardWrapper);

