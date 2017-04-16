import React, { PropTypes, Component } from 'react';
import { FormControl, Grid, Row, Col, Button, Form } from 'react-bootstrap';
import Radium from 'radium';

class AddElement extends Component {

    constructor() {
        super();
        this.state = {
            tempString: ''
        }
    }


    handleChange(e) {
        const tempString = e.target.value;

        this.setState({ tempString });
    }


    handleWrapper(e) {
        const { handler } = this.props;
        e.preventDefault();

        handler({
            target: {
                value: this.state.tempString
            }
        });

        // Clear the field
        e.target.elements[this.props.label].value = '';
    }


    render() {
        const { label } = this.props;

        return (
            <div className="add-element">
                <Form onSubmit={this.handleWrapper.bind(this)}>
                    <Row>
                        <Col md={2}>
                            <div style={{fontStyle: 'italic'}}>{`Editing ${label}`}</div>
                        </Col>
                        <Col md={8}>
                            <FormControl
                                name={this.props.label}
                                type="text"
                                value={this.props.tempString}
                                onChange={this.handleChange.bind(this)}/>
                        </Col>
                        <Col md={2}>
                            <Button 
                                className="pull-right"
                                bsSize="small"
                                type="submit">
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

AddElement.PropTypes = {
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};

export default Radium(AddElement);
