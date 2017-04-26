import React, { PropTypes, Component } from 'react';

import EditList from './EditList/EditList';
import EditString from './EditString';
import EditTextarea from './EditTextarea'; // May problema pa ito sa pagtoggle and all
import EditDropdown from './EditDropdown';
import EditNumberSlider from './EditNumberSlider';
import EditDate from './EditDate';
import EditTime from './EditTime';


class EditField extends Component {

    constructor(props) {
        super(props);
    }


    shouldComponentUpdate(nextProps) {
        if(this.props.currentValue !== nextProps.currentValue) {
            return true;
        }

        if(this.props.value === nextProps.value) {
            return false;
        }

        return true;
    }


    defineType(value) {
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


    displayProperlyByType(value) {

        if((this.props.options &&
            this.props.options.type &&
            this.props.options.type === 'text') ||
            this.props.type === 'text') {

            return <EditTextarea { ...this.props }/>;
        }

        if((this.props.options &&
            this.props.options.type &&
            this.props.options.type === 'dropdown') ||
            this.props.type === 'dropdown') {

            return <EditDropdown { ...this.props }/>;
        }

        if((this.props.options &&
            this.props.options.type &&
            this.props.options.type === 'numberSelect') ||
            this.props.type === 'numberSelect') {

            return <EditDropdown { ...this.props }/>;
        }

        if((this.props.options &&
            this.props.options.type &&
            this.props.options.type === 'time') ||
            this.props.type === 'time') {

            return <EditTime { ...this.props }/>;
        }

        if((this.props.options &&
            this.props.options.type &&
            this.props.options.type === 'date') ||
            this.props.type === 'date') {

            return <EditDate { ...this.props }/>;
        }

        // Kung walang nakadefine sa taas
        switch(this.defineType(value)) {
            case 'string': {
                return <EditString { ...this.props }/>;
            }

            case 'array': {
                return <EditList { ...this.props } />
            }

            case 'number': {
                return <EditNumberSlider { ...this.props }/>;
            }

            default: {
                return null;
            }
        }
    }


    render() {
        const { value, label } = this.props;

        return this.displayProperlyByType(value);
    }
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
    type: '' 
    /*
     * text === textarea
     * email === email
     * dropdown === dropdown
     */
};

export default EditField;
