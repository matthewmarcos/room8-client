import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesUtilities } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesUtilities extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempAirconditioning: this.props.airconditioning,
            tempLaundry: this.props.laundry,
            tempCooking: this.props.cooking,
            tempGasStove: this.props.gasStove,
            tempElectricStove: this.props.electricStove,
            tempMicrowave: this.props.microwave,
            tempWaterKettle: this.props.waterKettle,
            tempInternet: this.props.internet,
            tempTorrent: this.props.torrent,
            tempSpeedRequirement: String(this.props.speedRequirement)
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempAirconditioning: nextProps.airconditioning,
            tempLaundry: nextProps.laundry,
            tempCooking: nextProps.cooking,
            tempGasStove: nextProps.gasStove,
            tempElectricStove: nextProps.electricStove,
            tempMicrowave: nextProps.microwave,
            tempWaterKettle: nextProps.waterKettle,
            tempInternet: nextProps.internet,
            tempTorrent: nextProps.torrent,
            tempSpeedRequirement: String(this.props.speedRequirement)
        })
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


    updatePreferencesUtilities() {
        const { dispatch } = this.props;
        const toSend = {
            airconditioning: this.state.tempAirconditioning,
            laundry: this.state.tempLaundry,
            cooking: this.state.tempCooking,
            gasStove: this.state.tempGasStove,
            electricStove: this.state.tempElectricStove,
            microwave: this.state.tempMicrowave,
            waterKettle: this.state.tempWaterKettle,
            internet: this.state.tempInternet,
            torrent: this.state.tempTorrent,
            speedRequirement: Number(this.state.tempSpeedRequirement)
        };

        dispatch(updatePreferencesUtilities(toSend))
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Utilities Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Airconditioning"
                                value={this.state.tempAirconditioning}
                                currentValue={this.props.airconditioning}
                                handler={this.handleUserChange.bind(this, 'tempAirconditioning')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Laundry"
                                value={this.state.tempLaundry}
                                currentValue={this.props.laundry}
                                handler={this.handleUserChange.bind(this, 'tempLaundry')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Cooking"
                                value={this.state.tempCooking}
                                currentValue={this.props.cooking}
                                handler={this.handleUserChange.bind(this, 'tempCooking')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Gas Stove"
                                value={this.state.tempGasStove}
                                currentValue={this.props.gasStove}
                                handler={this.handleUserChange.bind(this, 'tempGasStove')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Electric Stove"
                                value={this.state.tempElectricStove}
                                currentValue={this.props.electricStove}
                                handler={this.handleUserChange.bind(this, 'tempElectricStove')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Microwave"
                                value={this.state.tempMicrowave}
                                currentValue={this.props.microwave}
                                handler={this.handleUserChange.bind(this, 'tempMicrowave')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Water Kettle"
                                value={this.state.tempWaterKettle}
                                currentValue={this.props.waterKettle}
                                handler={this.handleUserChange.bind(this, 'tempWaterKettle')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Internet"
                                value={this.state.tempInternet}
                                currentValue={this.props.internet}
                                handler={this.handleUserChange.bind(this, 'tempInternet')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Torrent"
                                value={this.state.tempTorrent}
                                currentValue={this.props.torrent}
                                handler={this.handleUserChange.bind(this, 'tempTorrent')}/>
                            <EditField 
                                label="Speed Requirement"
                                value={this.state.tempSpeedRequirement}
                                currentValue={String(this.props.speedRequirement)}
                                handler={this.handleUserChange.bind(this, 'tempSpeedRequirement')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Button
                            block
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.updatePreferencesUtilities.bind(this)}>
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
        // variable: store.preferences.variable,
        airconditioning: store.preferences.airconditioning,
        laundry: store.preferences.laundry,
        cooking: store.preferences.cooking,
        gasStove: store.preferences.gasStove,
        electricStove: store.preferences.electricStove,
        microwave: store.preferences.microwave,
        waterKettle: store.preferences.waterKettle,
        internet: store.preferences.internet,
        torrent: store.preferences.torrent,
        speedRequirement: store.preferences.speedRequirement,
        app: store.app
    };
})(PreferencesUtilities);
