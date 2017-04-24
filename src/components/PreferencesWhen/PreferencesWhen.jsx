import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesWhen } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesWhen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempStartDate: this.props.startDate,
            tempDuration: this.props.duration
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempStartDate: nextProps.startDate,
            tempDuration: nextProps.duration
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


    updatePreferencesWhen() {
        const { dispatch } = this.props;
        const toSend = {
            startDate: this.state.tempStartDate,
            duration: this.state.tempDuration
        };

        dispatch(updatePreferencesWhen(toSend))
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit When Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField
                                label="Start Date"
                                options={{
                                    type: 'date'
                                }}
                                value={this.state.tempStartDate}
                                currentValue={this.props.startDate}
                                handler={this.handleUserChange.bind(this, 'tempStartDate')}/>
                            <EditField 
                                options={{
                                    type: 'dropdown',
                                        values: ['End of semester', 'Indefinitely']
                                }}
                                label="Duration of Stay"
                                value={this.state.tempDuration}
                                currentValue={this.props.duration}
                                handler={this.handleUserChange.bind(this, 'tempDuration')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Button
                            block
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.updatePreferencesWhen.bind(this)}>
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
        startDate: store.preferences.startDate,
        duration: store.preferences.duration,
        app: store.app
    };
})(PreferencesWhen);
