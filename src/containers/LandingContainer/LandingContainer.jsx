import Landing from '../../components/Landing/Landing';

import React, {Component} from 'react';
import { connect } from 'react-redux';

class LandingContainer extends Component {

    render() {
        return (
            <Landing/>
        );
    }

}

export default connect((store) => {
    return {
        user: store.user,
        preferences: store.preferences
    };
})(LandingContainer);
