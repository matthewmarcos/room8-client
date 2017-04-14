import React, { PropTypes } from 'react';
import EditList from './EditList/EditList';


const EditField = (props) => {
    const { value, label, handler, text } = props;

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
        switch(defineType(value)) {
            case 'string': {
                if(props.text) {
                    // return EditTextarea
                }
                else {
                    // return EditString
                }
            }

            case 'array': {
            }

            case 'number': {
            }

            default: {
                return null;
            }
        }
    }

    return (
        <div>
            EditField here!

            { label }
            { value }
            { text ? 'true' : 'false' }
        </div>
    );
};

EditField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    handler: PropTypes.func.isRequired,
    text: PropTypes.bool
};

EditField.defaultProps = {
    text: false // Applicatble if value is type string. Renders textarea if true
};

export default EditField;
