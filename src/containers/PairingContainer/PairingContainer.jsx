import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';
import MatchTable from '../../components/MatchTable/MatchTable';
import _, { mapKeys } from 'lodash';
import { toSnakeCase, toCamelCase } from 'case-converter';
import { Grid, Row, Col } from 'react-bootstrap';
import DisplayField from '../../components/DisplayField/DisplayField';

class PairingContainer extends Component {

    render() {

        const bold = {
            fontWeight: 'bold'
        };

        return (
            <div className="pairing-container">
                <Grid>
                    <Row>
                        <h1>
                            Your pair is: <span style={ bold }>{ this.props.pair.username }</span>
                        </h1>
                    </Row>
                    <Row>
                        <h4>Additional Partner Details:</h4>
                    </Row>
                    <DisplayField
                        label="Nickname"
                        value={ this.props.pair.nickname }
                        newLine/>
                    <DisplayField
                        label="Full Name"
                        value={ this.props.pair.fullName }
                        newLine/>
                    <DisplayField
                        label="Bio"
                        value={this.props.pair.bio}
                        newLine/>
                    <Row>
                        <h4>Contact details:</h4>
                    </Row>
                    <Row>
                        <span style={ bold }>Contact:</span> { this.props.pair.contactNumber }
                    </Row>
                    <Row>
                        <span style={ bold }>Email:</span> { this.props.pair.email }
                    </Row>
                    <Row>
                        <h3>{ this.props.pair.nickname }'s preferences:</h3>
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

