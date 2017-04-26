import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesSex } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesCost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempSex: this.props.sex
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempSex: nextProps.sex
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


    updatePreferencesCost() {
        const { dispatch } = this.props;

        const toSend = {
            sex: this.state.tempSex
        };

        dispatch(updatePreferencesSex(toSend));
    }


    render() {
        return (
            <div className="preferences-sex">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Sex Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                        values: ['Male', 'Female', 'Do not know']
                                }}
                                label="Sex Preference"
                                value={this.state.tempSex}
                                currentValue={this.props.sex}
                                handler={this.handleUserChange.bind(this, 'tempSex')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button
                                block
                                bsStyle="primary"
                                bsSize="large"
                                onClick={this.updatePreferencesCost.bind(this)}>
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
        sex: store.preferences.sex
    };
})(PreferencesCost);
