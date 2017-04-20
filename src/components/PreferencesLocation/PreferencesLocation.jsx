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
            tempTravelTimeToUplb: this.props.travelTimeToUplb,
            tempGeneralLocation: this.props.generalLocation
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempNearbyRestaurants: nextProps.nearbyRestaurants,
            tempTravelTimeToUplb: nextProps.travelTimeToUplb,
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

        const toSend = {
            nearbyRestaurants: this.state.nearbyRestaurants,
            travelTimeToUplb: this.state.travelTimeToUplb,
            generalLocation: this.state.generalLocation
        };

        console.log('Updating Preferences Location with: ', toSend);
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
                                label="Nearby Restaurants"
                                value={this.state.tempNearbyRestaurants}
                                currentValue={this.props.nearbyRestaurants}
                                handler={this.handleUserChange.bind(this, 'tempNearbyRestaurants')}/>
                            <EditField
                                label="Travel Time to UPLB"
                                value={this.state.tempRentPriceRangeEnd}
                                currentValue={String(this.props.rentPriceRangeEnd)}
                                handler={this.handleUserChange.bind(this, 'tempRentPriceRangeEnd')}/>
                            <EditField
                                label="General Location"
                                value={this.state.tempUtilitiesPriceRangeEnd}
                                currentValue={String(this.props.utilitiesPriceRangeEnd)}
                                handler={this.handleUserChange.bind(this, 'tempUtilitiesPriceRangeEnd')}/>
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
