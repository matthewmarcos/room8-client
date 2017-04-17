import React, { PropTypes, Component } from 'react';
import { FormControl, Grid, Row, Col, Button, Collapse } from 'react-bootstrap';


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


    resetFields() {
        const { currentValue, handler } = this.props;

        handler({
            target: {
                value: currentValue
            }
        });
    }


    render() {
        const { label, value, handler, options, currentValue } = this.props;
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
                    <Col xs={12} sm={9} md={9}>
                        <FormControl
                            componentClass="select"
                            onChange={handler}
                            value={value}
                            placeholder={value}>
                            { userOptions }
                        </FormControl>
                    </Col>
                    <Col xs={12} sm={12} md={1}>
                        <Button
                            className="pull-right"
                            bsSize="small"
                            onClick={this.resetFields.bind(this)}>
                            Reset
                        </Button>
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
                    <div
                        onClick={this.toggleOpenMode.bind(this)}>
                        <Row>
                            <Col xs={12} sm={2} md={2}>
                               <span style={{
                                    fontWeight:'bold'
                                }}>
                                    {label}
                                </span>
                            </Col>
                            <Col xs={12} sm={3} md={3}>
                                <span style={{
                                    fontStyle: 'italic'
                                }}>
                                    { value !== currentValue? 'Old value: ' : null}
                                    { currentValue }
                                </span>
                            </Col>
                            <Col xs={12} sm={3} md={4}>
                                <span style={{
                                    fontStyle: 'italic'
                                }}>
                                    { value !== currentValue? ( <div> New value: { value } </div>) : null}
                                </span>
                            </Col>
                            <Col xs={12} xsOffset={1} sm={3} md={2}>
                                <Button
                                    className="pull-right"
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
