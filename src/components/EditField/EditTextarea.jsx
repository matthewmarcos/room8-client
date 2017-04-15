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


    shouldComponentUpdate(nextProps, nextState) {
        if(this.props === nextProps) {
            return false;
        }

        return true;
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
        const { label, value, handler } = this.props;

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
                    <Col xs={12} sm={10} md={10}>
                        <FormControl
                            componentClass="textarea"
                            value={ value }
                            onChange={ handler }/>
                    </Col>
                </Row>
            </div>
        );


        return (
            <div className="edit-textarea">
                <Grid fluid={true}>
                    <div
                        onClick={this.toggleOpenMode.bind(this)}
                        style={{
                            ':hover': {
                                cursor: 'pointer',
                                backgroundColor: '#dddddd'
                            }
                        }}
                    >
                        <Row>
                            <Col xs={12} sm={4} md={7}>
                                <span style={{
                                    fontWeight:'bold'
                                }}>
                                    {label}
                                </span>
                            </Col>

                            <Col xs={12} sm={4} md={3}>
                                <span style={{
                                    fontStyle: 'italic',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden'
                                }}>
                                { this.truncateString(40, value) }
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
                        { editForm }
                    </Collapse>
                </Grid>
            </div>
        );
    }
}


/*
 * EditTextarea - dumb component that contains a textarea. Takes in the following props:
 *
 * label - Form label that gets printed in bold
 * value - initial value of the field. If not specified, will draw an 'x'
 * handler - function for handleChange
 * minLength - Minimum length of the string it accepts
 * maxLength - Maximum length of the string it accepts
*/
EditTextarea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number
};


export default Radium(EditTextarea);
