import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { updatePreferencesCost } from '../../actions/UserActions';

import EditField from '../EditField/EditField';

class PreferencesCost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tempRentPriceRangeStart: String(this.props.rentPriceRangeStart),
            tempRentPriceRangeEnd: String(this.props.rentPriceRangeEnd),
            tempShouldIncludeUtilities: this.props.shouldIncludeUtilities,
            tempUtilitiesPriceRangeStart: String(this.props.utilitiesPriceRangeStart),
            tempUtilitiesPriceRangeEnd: String(this.props.utilitiesPriceRangeEnd)
        };
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            tempRentPriceRangeStart: String(nextProps.rentPriceRangeStart),
            tempRentPriceRangeEnd: String(nextProps.rentPriceRangeEnd),
            tempShouldIncludeUtilities: nextProps.shouldIncludeUtilities,
            tempUtilitiesPriceRangeStart: String(nextProps.utilitiesPriceRangeStart),
            tempUtilitiesPriceRangeEnd: String(nextProps.utilitiesPriceRangeEnd)
        })
    }


    handleUserChange(parameter, e) {
        const newValue = Number(e.target.value);
        let tempStateCopy = {
            ...this.state
        };

        if(parameter === 'shouldIncludeUtilities') {
            tempStateCopy[parameter] = e.target.value;
        }
        else if(isNaN(newValue)) {
            return;
        }
        else {
            tempStateCopy[parameter] = e.target.value;
        }

        this.setState({
            ...tempStateCopy
        });
    }


    updatePreferencesCost() {
        const { dispatch } = this.props;

        const toSend = {
            rentPriceRangeStart: this.state.tempRentPriceRangeStart,
            rentPriceRangeEnd: this.state.tempRentPriceRangeEnd,
            shouldIncludeUtilities: this.state.tempShouldIncludeUtilities,
            utilitiesPriceRangeStart: this.state.tempUtilitiesPriceRangeStart,
            utilitiesPriceRangeEnd: this.state.tempUtilitiesPriceRangeEnd
        };

        console.log('Updating Preferences When with: ', toSend);
        dispatch(updatePreferencesCost(toSend));
    }


    render() {
        return (
            <div className="preferences-when">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1>Edit Cost Preferences</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <EditField
                                label="Rent Price Start"
                                value={this.state.tempRentPriceRangeStart}
                                currentValue={String(this.props.rentPriceRangeStart)}
                                handler={this.handleUserChange.bind(this, 'tempRentPriceRangeStart')}/>
                            <EditField
                                label="Rent Price End"
                                value={this.state.tempRentPriceRangeEnd}
                                currentValue={String(this.props.rentPriceRangeEnd)}
                                handler={this.handleUserChange.bind(this, 'tempRentPriceRangeEnd')}/>
                            <EditField
                                options={{
                                    type: 'dropdown',
                                        values: ['Yes', 'No', 'Do not care']
                                }}
                                label="Should Include Utilities"
                                value={this.state.tempShouldIncludeUtilities}
                                currentValue={this.props.shouldIncludeUtilities}
                                handler={this.handleUserChange.bind(this, 'tempDuration')}/>
                            <EditField
                                label="Utilities Price Start"
                                value={this.state.tempUtilitiesPriceRangeStart}
                                currentValue={String(this.props.utilitiesPriceRangeStart)}
                                handler={this.handleUserChange.bind(this, 'tempUtilitiesPriceRangeStart')}/>
                            <EditField
                                label="Utilities Price End"
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
                            onClick={this.updatePreferencesCost.bind(this)}>
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
        rentPriceRangeStart: store.preferences.rentPriceRangeStart,
        rentPriceRangeEnd: store.preferences.rentPriceRangeEnd,
        shouldIncludeUtilities: store.preferences.shouldIncludeUtilities,
        utilitiesPriceRangeStart: store.preferences.utilitiesPriceRangeStart,
        utilitiesPriceRangeEnd: store.preferences.utilitiesPriceRangeEnd
    };
})(PreferencesCost);
