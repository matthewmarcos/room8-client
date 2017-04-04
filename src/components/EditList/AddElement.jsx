import React, { PropTypes } from 'react';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';
import Radium from 'radium';

const AddElement = (props) => {
    return (
        <div className="add-element">
            <FormControl
                name={props.fieldName}
                type="text"
                value={props.tempString}
                onChange={props.handleChange.bind(this)}/>

            <Button onClick={props.handleAdd.bind(this)}>Add</Button>
        </div>
    );
};

AddElement.PropTypes = {
    'handleAdd': PropTypes.func.isRequired,
    'handleChange': PropTypes.func.isRequired,
    'tempString': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired
};

export default Radium(AddElement);
