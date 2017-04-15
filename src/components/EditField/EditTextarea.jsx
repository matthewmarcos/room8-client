/*
 * EditTextarea - dumb component that contains a textfield. Takes in the following props:
 * label - Label for the form
 * fieldName - Name of the field
 * value - initial value
 * handler - handler function
 * minLength - Minimum length of the string it accepts
 *
 * Wrap editString with connect and edit the fieldName in userStore?
*/

import React, { PropTypes, Component } from 'react';
import { FormControl, Grid, Row, Col, Button, Collapse } from 'react-bootstrap';


import Radium from 'radium';

// import { connect } from 'react-redux';
// import * as actions from '../../actions/UserActions';


class EditTextarea extends Component {

    constructor() {
        super();

        this.state = {
            displayString: '',
            isOpen: false // if form is active or not
        };
    }


    truncateString(length, string) {
        if(length <= 3) {
            return '...';
        }
        if(string.length <= length) {
            return string;
        }

        else {
            // Subtract length by three to make space for ellipsis
            const tempString = string.slice(0, length - 3);
            return tempString + '...';
        }

    }


    componentDidMount() {
        // Initialize tempValue to what is passed from value in props

        // Takes the first 'length-3' characters of a string then appends ellipsis if too long.
        const displayString = this.truncateString(40, this.props.value);

        this.setState({
            tempValue: this.props.value,
            displayString
        });

        window.dice = this.truncateString;
    }


    toggleOpenMode(e) {
        // console.log('Toggle state!');
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {
        const { label, value, handler, currentValue } = this.props;

        // Margin and padding to 0 to reduce animation lag
        const editForm = (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                <Row>
                    <Col xs={12} sm={2} md={2}>
                        <span style={{
                            fontStyle: 'italic'
                        }}>
                            Change { label }
                        </span>
                    </Col>
                    <Col xs={12} sm={9} md={9}>
                        <FormControl
                            componentClass="textarea"
                            value={ value }
                            onChange={ handler }/>
                    </Col>
                </Row>
            </div>
        );


        return (
            <div style={{
                padding: 5,
                margin: 5,
                ':hover': {
                    cursor: 'pointer',
                    backgroundColor: '#dddddd'
                }
            }}>
                <Grid fluid={true}>
                    <div onClick={this.toggleOpenMode.bind(this)}>
                        <Row>
                            <Col xs={12} sm={2} md={2}>
                                <span style={{
                                    fontWeight:'bold'
                                }}>
                                    { label }
                                </span>
                            </Col>

                            <Col xs={12} sm={6} md={7}>
                                <span style={{
                                    fontStyle: 'italic',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden'
                                }}>
                                { this.truncateString(80, currentValue) }
                                </span>
                            </Col>

                            <Col xs={12} sm={3} md={2}>
                                <Button
                                    className="pull-right"
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
                        { editForm }
                    </Collapse>
                </Grid>
            </div>
        );
    }
}


EditTextarea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currentValue: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};


export default Radium(EditTextarea);
