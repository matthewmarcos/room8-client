import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesLocation } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempNearbyRestaurants: this.props.nearbyRestaurants,
            tempTravelTimeToUplb: String(this.props.travelTimeToUplb),
            tempGeneralLocation: this.props.generalLocation
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempNearbyRestaurants: nextProps.nearbyRestaurants,
            tempTravelTimeToUplb: String(nextProps.travelTimeToUplb),
            tempGeneralLocation: nextProps.generalLocation
        });
    }


    handleUserChange(parameter, e) {
        let tempStateCopy = {
            ...this.state
        };

        tempStateCopy[parameter] = e.target.value;
        this.setState({
            ...tempStateCopy
        });
    }


    updatePreferencesLocation() {
        const { dispatch } = this.props;
        const travelTimeToUplb = Number(this.state.travelTimeToUplb);


        const toSend = {
            nearbyRestaurants: this.state.nearbyRestaurants,
            generalLocation: this.state.generalLocation,
            travelTimeToUplb
        };


        if(isNaN(travelTimeToUplb)) {
            return alert('Mali ang nasa travelTimeToUplb');
        }

        dispatch(updatePreferencesLocation(toSend));
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Location Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                        values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Nearby Restaurants"
                                value={this.state.tempNearbyRestaurants}
                                currentValue={this.props.nearbyRestaurants}
                                handler={this.handleUserChange.bind(this, 'tempNearbyRestaurants')}/>
                            <EditField
                                label="Travel Time to UPLB (mins)"
                                value={this.state.tempTravelTimeToUplb}
                                currentValue={String(this.props.travelTimeToUplb)}
                                handler={this.handleUserChange.bind(this, 'tempTravelTimeToUplb')}/>
                            <EditField
                                label="General Location"
                                value={this.state.tempGeneralLocation}
                                currentValue={this.props.generalLocation}
                                handler={this.handleUserChange.bind(this, 'tempGeneralLocation')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Button
                            block
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.updatePreferencesLocation.bind(this)}>
                            Submit
                        </Button>
                    </Row>
                </Grid>
            </div>
        );
    }
};

export default connect((store) => {
    return {
        nearbyRestaurants: store.preferences.nearbyRestaurants,
        travelTimeToUplb: store.preferences.travelTimeToUplb,
        generalLocation: store.preferences.generalLocation
    };
})(PreferencesLocation);
