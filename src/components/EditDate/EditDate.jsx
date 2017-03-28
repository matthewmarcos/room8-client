/*
 * EditDate - dumb component that contains a textfield. Takes in the following props:
 * label - Label for the form
 * fieldName - Name of the field
 * value - initial value
*/

import React, { PropTypes, Component } from 'react';
import { FormGroup, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import Radium from 'radium';


class EditDate extends Component {

    constructor() {
        super();

        this.state = {
            tempValue: new Date().toISOString(),
            isOpen: false // if form is active or not
        };
    }

    componentDidMount() {
        // Initialize tempValue to what is passed from value in props
        this.setState({
            tempValue: this.props.value.toISOString()
        });
    }


    handleChange(value, formattedValue) {
        // Change tempValue based on change
        this.setState({
            tempValue: value
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

        // http://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
        Date.prototype.yyyymmdd = function() {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();

            return [this.getFullYear(),
                    (mm>9 ? '' : '0') + mm,
                    (dd>9 ? '' : '0') + dd
                    ].join('/');

        };

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
                            <Col xs={12} sm={2} md={2}>
                                <span style={{
                                    fontStyle: 'italic'
                                }}>
                                    Change {this.props.label}
                                </span>
                            </Col>
                            <Col xs={12} sm={8} md={8}>
                                <DatePicker
                                    name={this.props.fieldName}
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.tempValue}
                                />
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
                            <span style={{
                                fontStyle: 'italic'
                            }}>
                            {/* Make the date a string */}
                                { value.yyyymmdd() }
                            </span>
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


EditDate.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired
};


export default Radium(EditDate);
