import React, { PropTypes } from 'react';

import EditList from './EditList/EditList';
import EditString from './EditString';
import EditTextarea from './EditTextarea'; // May problema pa ito sa pagtoggle and all
import EditDropdown from './EditDropdown';
import EditNumberSlider from './EditNumberSlider';
import EditDate from './EditDate';


const EditField = (props) => {
    const { value } = props;

    function defineType(value) {
        if(typeof value === 'string') {
            return 'string';
        }
        else if(typeof value === 'number') {
            return 'number';
        }
        else if(value.constructor === Array) {
            return 'array';
        }
        else if(typeof value === 'boolean') {
            return 'boolean';
        }

        return 'DefaultType';
    }

    function displayProperlyByType(value) {

        if((props.options &&
            props.options.type &&
            props.options.type === 'text') ||
            props.type === 'text') {

            return <EditTextarea { ...props }/>;
        }

        if((props.options &&
            props.options.type &&
            props.options.type === 'dropdown') ||
            props.type === 'dropdown') {

            return <EditDropdown { ...props }/>;
        }

        if((props.options &&
            props.options.type &&
            props.options.type === 'date') ||
            props.type === 'date') {

            return <EditDate { ...props }/>;
        }

        // Kung walang nakadefine sa taas
        switch(defineType(value)) {
            case 'string': {
                return <EditString { ...props }/>;
            }

            case 'array': {
                return <EditList { ...props } />
            }

            case 'number': {
                return <EditNumberSlider { ...props }/>;
            }

            default: {
                return null;
            }
        }
    }

    return displayProperlyByType(value);
};

EditField.propTypes = {
    label: PropTypes.string.isRequired, // What will be shown as label
    value: PropTypes.any.isRequired, // value in state
    currentValue: PropTypes.any.isRequired, // Will not be changed. Only to compare changes.
    handler: PropTypes.func.isRequired, // event handler, must have 2 parameters (event and fieldName to edit)
    type: PropTypes.string,
    validator: PropTypes.func, // returns True if input is valid. False if not 

    options: PropTypes.shape({
        type: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string)
    })
};

EditField.defaultProps = {
    type: null 
    /*
     * text === textarea
     * email === email
     * dropdown === dropdown
     */
};

export default EditField;
