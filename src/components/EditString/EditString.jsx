import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


const EditString = ({ label, fieldName, value, handler, minLength }) => {

    let userInput = value;

    const getValidationState = (userInput) => {

        if(userInput.length < minLength) {
            return 'error';
        }

        return 'success';
    };

    const handleChange = (event, attrib) => {
        const tempValue = event.target.value;
        userInput = tempValue;
        handler(tempValue);
    };

    return (
        <div className="edit-string">
            <form>
                <FormGroup
                    controlId={ fieldName }
                    validationState={ this.getValidationState.bind(this, userInput) }
                >
                    <FormControl
                        type="text"
                        value={ userInput }
                        onChange={ handleChange }
                        placeholder={ userInput }
                    />
                </FormGroup>
            </form>
        </div>
    );
};

EditString.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.string.isRequired,
    'handler': PropTypes.func.isRequired,
    'minLength': PropTypes.number.isRequired
};


export default EditString;

