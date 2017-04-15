/*
 *  See documentation before the export
*/
import React, { PropTypes, Component } from 'react';
import { FormControl, Grid, Row, Col, Button, Collapse } from 'react-bootstrap';

import Radium from 'radium';


class EditString extends Component {

    constructor() {
        super();

        this.state = {
            isOpen: false // if form is active or not
        };
    }


    toggleOpenMode(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {
        const { label, fieldName, value, handler } = this.props;

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
                            type="text"
                            value={ value }
                            onChange={ handler }/>
                    </Col>
                </Row>
            </div>
        );

        return (
            <div>
                <Grid fluid={true}>
                    <div
                        onClick={this.toggleOpenMode.bind(this)}
                        style={{ 
                            ':hover': {
                                cursor: 'pointer',
                                backgroundColor: '#dddddd'
                            }
                        }}>
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
                                    {value}
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
                            {/* To add space between the collapse form */}
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


/*
 * EditString - dumb component that contains a textfield. Takes in the following props:
 *
 * label - Form label that gets printed in bold
 * value - initial value of the field. If not specified, will draw an 'x'
 * handler - function for handleChange
 * minLength - Minimum length of the string it accepts
 * maxLength - Maximum length of the string it accepts
*/
EditString.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    handler: PropTypes.func.isRequired,
    minLength: PropTypes.number,
    maxLength: PropTypes.number
};

export default Radium(EditString);

