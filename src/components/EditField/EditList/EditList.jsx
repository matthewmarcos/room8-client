import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col, Button, Collapse } from 'react-bootstrap';
import HiddenMenu from './HiddenMenu';

import Radium from 'radium';


class EditList extends Component {

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
        const { label, value } = this.props;
        const length = 40;
        const sliceAndDice = (length, string) => {
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
        };
        const renderPreview = (string) => {
            return sliceAndDice(length, string.join(' '));
        };

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
                                    {renderPreview(value)}
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
                        <div>
                            <HiddenMenu
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                { ...this.props }
                            />
                        </div>
                    </Collapse>
                </Grid>
            </div>
        );
    }
}


EditList.propTypes = {
    label: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValue: PropTypes.arrayOf(PropTypes.string).isRequired,
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};


export default Radium(EditList);
