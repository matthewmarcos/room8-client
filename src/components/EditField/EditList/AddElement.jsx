import React, { PropTypes } from 'react';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';
import Radium from 'radium';

const AddElement = (props) => {
    const { label, handler, validator } = props;

    return (
        <div className="add-element">
            <Grid bsClass={'container-fluid'}>
                <Row>
                    <Col md={2}>
                        <div style={{fontStyle: 'italic'}}>{`Editing ${label}`}</div>
                    </Col>
                    <Col md={8}>
                        <FormControl
                            name={props.fieldName}
                            type="text"
                            value={props.tempString}
                            onChange={props.handleChange.bind(this)}/>
                    </Col>
                    <Col md={2}>
                        <Button onClick={props.handleAdd.bind(this)}>
                            Add
                        </Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

AddElement.PropTypes = {
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};

export default Radium(AddElement);
