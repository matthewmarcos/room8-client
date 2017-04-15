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
                    <Col xs={12} sm={6} md={6}>
                        <ReactBootstrapSlider
                            value={ value }
                            slideStop={ handler }
                            change={ handler }
                            step={ 1 }
                            max={ max }
                            min={ min }
                            orientation="horizontal"/>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                        { value !== currentValue? ( <div> New Value: { value } </div>) : null}
                    </Col>
                </Row>
            </div>
        );

        return (
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
                                    { value !== currentValue? 'Old ' : null}
                                    Value:  { currentValue } &nbsp;
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

