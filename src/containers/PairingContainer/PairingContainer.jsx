import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';

class PairingContainer extends Component {

    render() {
        return (
            <div class="pairing-container">
                <h1>
                    Pairing Container
                </h1>
            </div>
        );
    }
}

export default connect(store => {
    return {
        user: store.user,
        isFetchingData: store.app.isLoading,
        pair: store.pairing.pair
    };
})(PairingContainer);

