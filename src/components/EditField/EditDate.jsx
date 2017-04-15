import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col, Button, Collapse } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import Radium from 'radium';


class EditDate extends Component {

    constructor() {
        super();

        this.state = {
            isOpen: false // if form is active or not
        };
    }


    isDate(value) {
        let tempDate = Date.parse(value);

        if(isNaN(tempDate)) {
            return false;
        }
        else {
            return true;
        }
    }



    handlerWrapper(value, formattedValue) {
        const { handler } = this.props;

        handler({
            target: {
                value
            }
        });

    };


    toggleOpenMode(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {
        const { label, value, currentValue } = this.props;

        // http://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
        const formatDate = function(date) {
            var mm = date.getMonth() + 1; // getMonth() is zero-based
            var dd = date.getDate();

            return [date.getFullYear(),
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
                <Row>
                    <Col xs={12} sm={2} md={2}>
                        <span style={{
                            fontStyle: 'italic'
                        }}>
                            Change { label }
                        </span>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <DatePicker
                            onChange={ this.handlerWrapper.bind(this) }
                            value={ value }
                        />
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
                                    { label }
                                </span>
                            </Col>

                            {/* Do I hide the value when the screen is small? */}
                            <Col xs={12} sm={4} md={3}>
                                <span style={{
                                    fontStyle: 'italic'
                                }}>
                                    {/* Make the date a string */}
                                    { value !== currentValue? 'Old ' : null}
                                    Value: {
                                        this.isDate(currentValue) ?
                                            formatDate(new Date(currentValue)):
                                            'nope'
                                    } &nbsp;
                                    { 
                                        value !== currentValue? ( 
                                            <div>
                                                New Value: { formatDate(new Date(value)) }
                                            </div>
                                        ) : null
                                    }
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



EditDate.propTypes = {
    label: PropTypes.string.isRequired,
    value: function(props, propName, componentName) {
        // Dapat kasi ISOString
        const value = props[propName];
        let tempDate = Date.parse(value);

        if(isNaN(tempDate)) {
            return new Error('Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.');
        }
    },
    currentValue: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};


EditDate.defaultProps = {
    value: new Date().toISOString(),
    currentValue: new Date().toISOString()
};

export default Radium(EditDate);
