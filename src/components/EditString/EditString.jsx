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
import {
    FormGroup, ControlLabel, FormControl,
    HelpBlock, Grid, Row, Col, Button,
    Collapse
} from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions';


class EditString extends Component {

    constructor() {
        super();

        this.state = {
            tempValue: '',
            isOpen: false // if form is active or not
        };
    }

    componentDidMount() {
        // Initialize tempValue to what is passed from value in props
        this.setState({
            tempValue: this.props.value
        });
    }


    handleChange(e) {
        // Change tempValue based on change
        this.setState({
            tempValue: e.target.value
        });
    };


    toggleOpenMode(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {
        const { label, fieldName, minLength } = this.props;

        const labelStyle = {
            fontWeight:'bold'
        };

        const displayForm = (
            <div className="display-mode">
                displayMode!
            </div>
        );

        const editForm = (
            <div className="edit-mode">
                <form id={fieldName}>
                    <FormGroup
                        controlId={ fieldName }
                    >
                        <FormControl
                            type="text"
                            value={ this.state.tempValue }
                            onChange={ this.handleChange.bind(this) }
                        />
                    </FormGroup>
                </form>
            </div>
        );

        return(
            <div className="edit-string">
                <span style={ labelStyle }>{ label }</span>
                <Button onClick={ this.toggleOpenMode.bind(this) }>
                    Edit
                </Button>
                <Collapse in={ this.state.isOpen }>
                    { editForm }
                </Collapse>
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

