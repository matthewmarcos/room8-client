/*
 * EditString - dumb component that contains a textfield. Takes in the following props:
 * label - Label for the form
 * fieldName - Name of the field
 * value - initial value
 * handler - handler function
 * minLength - Minimum length of the string it accepts
 *
 * Wrap editString with connect and edit the fieldName in userStore?
*/

import React, { PropTypes, Component } from 'react';
import {
    FormGroup, ControlLabel, FormControl,
    HelpBlock, Grid, Row, Col, Button,
    Collapse, Form
} from 'react-bootstrap';


import Radium from 'radium';

// import { connect } from 'react-redux';
// import * as actions from '../../actions/UserActions';


class EditString extends Component {

    constructor() {
        super();

        this.state = {
            tempValue: '',
            isOpen: false // if form is active or not
        };
    }

    componentDidMount() {
        // Initialize tempValue to what is passed from value in props
        this.setState({
            tempValue: this.props.value
        });
    }


    handleChange(e) {
        // Change tempValue based on change
        this.setState({
            tempValue: e.target.value
        });
    };


    toggleOpenMode(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    handleSubmit(e) {
        e.preventDefault();

        const toSubmitValue = e.target.elements[this.props.fieldName].value;
        console.log(toSubmitValue, ' has been submitted');
    }


    render() {
        const { label, fieldName, value } = this.props;

        // Margin and padding to 0 to reduce animation lag
        const editForm = (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                <Form id={fieldName} onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup
                        controlId={`${fieldName}-text-form`}>
                        <Row>
                            <Col xs={12} sm={10} md={10}>
                                <FormControl
                                    name={this.props.fieldName}
                                    type="text"
                                    value={this.state.tempValue}
                                    onChange={this.handleChange.bind(this)}/>
                            </Col>
                            <Col xs={12} sm={2} md={2}>
                                <Button
                                    bsSize="small"
                                    type="submit">
                                    Change
                                </Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </div>
        );

        return(
            <div className="edit-string">
                <Grid fluid={true}>
                    <div onClick={this.toggleOpenMode.bind(this)}>
                        <Row>
                            <Col xs={12} sm={4} md={7}>
                                <span style={{
                                    fontWeight:'bold'
                                }}>
                                {label}
                            </span>
                        </Col>

                        {/* Do I hide the value when the screen is small? */}
                        <Col xs={12} sm={4} md={3}>
                            {value}
                        </Col>

                        <Col xs={12} sm={4} md={2}>
                            <Button 
                                bsSize="small"
                                onClick={this.toggleOpenMode.bind(this)}>
                                Edit
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <span style={{
                            marginTop: 1,
                            marginBottom: 1
                        }}>
                        </span>
                    </Row>
                </div>
                    <Collapse in={this.state.isOpen}>
                        {editForm}
                    </Collapse>
                </Grid>
            </div>
        );
    }
}


EditString.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.string.isRequired,
    // 'handler': PropTypes.func.isRequired,
    'minLength': PropTypes.number.isRequired
};


export default Radium(EditString);
