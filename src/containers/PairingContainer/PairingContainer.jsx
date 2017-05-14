import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';
import MatchTable from '../../components/MatchTable/MatchTable';
import _, { mapKeys } from 'lodash';
import { toSnakeCase, toCamelCase } from 'case-converter';
import { Grid, Row, Col } from 'react-bootstrap';

class PairingContainer extends Component {

    render() {
        return (
            <div className="pairing-container">
                <Grid>
                    <Row>
                        <h1>
                            Your pair is: { this.props.pair.username }
                        </h1>
                    </Row>
                    <Row>
                        Contact: { this.props.pair.contactNumber }
                        Email: { this.props.pair.email }
                    </Row>
                    <Row>
                        <MatchTable
                            person2={this.props.pair}
                            person1={this.props.user}
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(store => {

    const tempPair1 = toSnakeCase(store.pairing.pair);

    const tempPair2 = mapKeys(store.pairing.pair, function(value, key, object) {
        let tempName = key;
        tempName = tempName.split('');
        tempName.splice(0, 4)
        tempName = tempName.join('');

        return tempName;
    });

    const pair = toCamelCase(tempPair2);

    // About current logged in user
    const tempPreferences = _.mapKeys(toSnakeCase(store.preferences), (val, key) => { return 'pref_' + key });
    const tempUser = _.mapKeys(toSnakeCase(store.user), (val, key) => { return 'my_' + key });
    const person1 = {
        ...toCamelCase(tempPreferences),
        ...toCamelCase(tempUser)
    };

    return {
        user: person1,
        isFetchingData: store.app.isLoading,
        pair
    };
})(PairingContainer);

