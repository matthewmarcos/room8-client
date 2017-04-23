import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesLifestyle } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesLifestyle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempAlcohol: this.props.alcohol,
            tempCleanliness: this.props.cleanliness,
            tempSmokers: this.props.smokers,
            tempStudyTime: this.props.studyTime,
            tempGuestsInRoom: this.props.guestsInRoom,
            tempGuestsStudyArea: this.props.guestsStudyArea,
            tempPets: this.props.pets,
            tempOrg: this.props.org
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempAlcohol: nextProps.alcohol,
            tempCleanliness: nextProps.cleanliness,
            tempSmokers: nextProps.smokers,
            tempStudyTime: nextProps.studyTime,
            tempGuestsInRoom: nextProps.guestsInRoom,
            tempGuestsStudyArea: nextProps.guestsStudyArea,
            tempPets: nextProps.pets,
            tempOrg: nextProps.org
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


    updatePreferencesLifestyle() {
        const { dispatch } = this.props;
        const toSend = {
            alcohol: this.state.tempAlcohol,
            cleanliness: this.state.tempCleanliness,
            smokers: this.state.tempSmokers,
            studyTime: this.state.tempStudyTime,
            guestsInRoom: this.state.tempGuestsInRoom,
            guestsStudyArea: this.state.tempGuestsStudyArea,
            pets: this.state.tempPets,
            org: this.state.tempOrg,
        };

        dispatch(updatePreferencesLifestyle(toSend))
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Lifestyle Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Alcohol"
                                value={this.state.tempAlcohol}
                                currentValue={this.props.alcohol}
                                handler={this.handleUserChange.bind(this, 'tempAlcohol')}/>
                            <EditField
                                label="Cleanliness"
                                value={this.state.tempCleanliness}
                                currentValue={this.props.cleanliness}
                                handler={this.handleUserChange.bind(this, 'tempCleanliness')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Smokers"
                                value={this.state.tempSmokers}
                                currentValue={this.props.smokers}
                                handler={this.handleUserChange.bind(this, 'tempSmokers')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                    values: ['Morning', 'Evening', 'Both', 'Do not care']
                                }}
                                label="Study Time"
                                value={this.state.tempStudyTime}
                                currentValue={this.props.studyTime}
                                handler={this.handleUserChange.bind(this, 'tempStudyTime')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Guests In Room"
                                value={this.state.tempGuestsInRoom}
                                currentValue={this.props.guestsInRoom}
                                handler={this.handleUserChange.bind(this, 'tempGuestsInRoom')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Guests In Study Area"
                                value={this.state.tempGuestsStudyArea}
                                currentValue={this.props.guestsStudyArea}
                                handler={this.handleUserChange.bind(this, 'tempGuestsStudyArea')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Pets"
                                value={this.state.tempPets}
                                currentValue={this.props.pets}
                                handler={this.handleUserChange.bind(this, 'tempPets')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Org"
                                value={this.state.tempOrg}
                                currentValue={this.props.org}
                                handler={this.handleUserChange.bind(this, 'tempOrg')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Button
                            block
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.updatePreferencesLifestyle.bind(this)}>
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
        alcohol: store.preferences.alcohol,
        cleanliness: store.preferences.cleanliness,
        smokers: store.preferences.smokers,
        studyTime: store.preferences.studyTime,
        guestsInRoom: store.preferences.guestsInRoom,
        guestsStudyArea: store.preferences.guestsStudyArea,
        pets: store.preferences.pets,
        org: store.preferences.org,
        app: store.app
    };
})(PreferencesLifestyle);
