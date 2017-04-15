import React, { PropTypes, Component } from 'react';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';


import Radium from 'radium';


class EditDropdown extends Component {

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
        const { label, value, handler, options } = this.props;
        const { values } = options;
        const userOptions = values.map((value, key)=> {
                        return (
                            <option
                                key={key}
                                id={value}
                                name={value}>
                                {value}
                            </option>
                        );
                    });
        const editForm = (
            // Margin and padding to 0 to reduce animation lag
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
                    <Col xs={12} sm={8} md={8}>
                        <FormControl
                            componentClass="select"
                            onChange={handler}
                            placeholder={value}>
                            { userOptions }
                        </FormControl>
                    </Col>
                </Row>
            </div>
        );

        return (
            <div className="edit-string">
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
                        { editForm }
                    </Collapse>
                </Grid>
            </div>
        );
    }
}


EditDropdown.propTypes = {
    label: PropTypes.string.isRequired, // What will be shown as label
    value: PropTypes.any.isRequired, // value in state
    currentValue: PropTypes.any.isRequired, // Will not be changed. Only to compare changes.
    handler: PropTypes.func.isRequired, // event handler, must have 2 parameters (event and fieldName to edit)
    options: PropTypes.shape({
        type: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};


export default Radium(EditDropdown);
