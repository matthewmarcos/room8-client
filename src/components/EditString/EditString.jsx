/*
 * EditString - dumb component that contains a textfield. Takes in the following props:
 * label - Label for the form
 * fieldName - Name of the field
 * value - initial value
 * handler - handler function
 * minLength - Minimum length of the string it accepts
 *
 * Wrap editString with connect and edit the fieldName in userStore?
*/

import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions';


class EditString extends Component {

    constructor() {
        super();

        this.state = {
            isEditing: false // if form is active or not
        };
    }


    render() {
        const { label, fieldName, value, handler, minLength } = this.props;

        let userInput = value;

        const getValidationState = (userInput) => {

            if(userInput.length < minLength) {
                return 'error';
            }

            return 'success';
        };

        const changeValue = (fieldName, newValue) => {
            console.log(
                'CHANGE_VALUE',
                'fieldName', fieldName,
                'newValue', newValue
            );
        };

        const handleChange = (event, attrib) => {
            const tempValue = event.target.value;
            // userInput = tempValue;
            // handler(tempValue);

            this.props.dispatch(actions.changeUserProperty(fieldName, tempValue));
        };

        const labelStyle = {
            fontWeight:'bold'
        };

        return(
            <div className="edit-string">
                <span style={ labelStyle }>{ label }</span>
                <form id={fieldName}>
                    <FormGroup
                        controlId={ fieldName }
                        validationState="error"
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
    }
}


EditString.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.string.isRequired,
    // 'handler': PropTypes.func.isRequired,
    'minLength': PropTypes.number.isRequired
};


export default connect(store => {
    return {
        user: store.user
    };
})(EditString);


