import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesMisc } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesMisc extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempCurfew: this.props.curfew,
            tempCurfewTime: this.props.curfewTime
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempCurfew: nextProps.curfew,
            tempCurfewTime: nextProps.curfewTime
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


    handleTimeChange(tempCurfewTime) {
        function pad(n){return n<10 ? '0'+n : n}
        console.log(`Time: ${ tempCurfewTime }`);

        const hours = Math.floor(tempCurfewTime / 3600);
        const minutes = (tempCurfewTime % 3600) / 60;
        const time = `${ pad(hours) }:${ pad(minutes) }:00`;

        this.setState({ 
            tempCurfewTime: time
        });
    }


    updatePreferencesMisc() {
        const { dispatch } = this.props;

        const toSend = {
            curfew: this.state.tempCurfew,
            curfewTime: this.state.tempCurfewTime,
        };

        dispatch(updatePreferencesMisc(toSend));
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Misc Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                    values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Has Curfew?"
                                value={this.state.tempCurfew}
                                currentValue={this.props.curfew}
                                handler={this.handleUserChange.bind(this, 'tempCurfew')}/>
                            <EditField
                                options={{
                                    type: 'time'
                                }}
                                label="Curfew Time"
                                value={this.state.tempCurfewTime}
                                currentValue={this.props.curfewTime}
                                handler={this.handleTimeChange.bind(this)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button
                                block
                                bsStyle="primary"
                                bsSize="large"
                                onClick={this.updatePreferencesMisc.bind(this)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};


export default connect((store) => {
    return {
        curfew: store.preferences.curfew,
        curfewTime: store.preferences.curfewTime
    };
})(PreferencesMisc);
