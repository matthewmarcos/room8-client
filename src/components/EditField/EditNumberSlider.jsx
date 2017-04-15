import React, { PropTypes, Component } from 'react';
import { FormGroup, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';


import Radium from 'radium';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.min.css'


class EditNumberSlider extends Component {

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
        const { label, value, min, max, handler, currentValue } = this.props;

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
                            Change {this.props.label}
                        </span>
                    </Col>
                    <Col xs={12} sm={9} md={9}>
                        <ReactBootstrapSlider
                            value={ value }
                            slideStop={ handler }
                            change={ handler }
                            step={ 1 }
                            max={ max }
                            min={ min }
                            orientation="horizontal"/>
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
                            <Col xs={12} sm={3} md={2}>
                                <Button 
                                    className="pull-right"
                                    bsSize="small"
                                    onClick={this.toggleOpenMode.bind(this)}>
                                    Edit
                                </Button>
                            </Col>
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


EditNumberSlider.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired
};

EditNumberSlider.defaultProps = {
    min: 1,
    max: 10
}


export default Radium(EditNumberSlider);

