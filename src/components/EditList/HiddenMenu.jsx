import React, { PropTypes } from 'react';
import Radium from 'radium';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';

const HiddenMenu = (props) => {
    const { label, fieldName, value } = props;

    // Margin and padding to 0 to reduce animation lag
    return (
        <div style={{
            margin: 0,
            padding: 0
        }}>
            {
                value.map((interest, key) => (
                    <div key={key}>
                        {`${key + 1}: ${interest}`}
                    </div>
                ))
            }
        </div>
    );
};

HiddenMenu.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.arrayOf(PropTypes.string),
    'url': PropTypes.string.isRequired,
    'handleChange': PropTypes.func.isRequired,
    'handleSubmit': PropTypes.func.isRequired

};

export default Radium(HiddenMenu);
