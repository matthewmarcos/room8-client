import React, { PropTypes } from 'react';
import { Row, Grid } from 'react-bootstrap';

import DisplayArray from './DisplayArray';
import DisplayString from './DisplayString';
import DisplayNumber from './DisplayNumber';

const DisplayField = (props) => {
    if(!props.value) {
        return null;
    }

    const boldFont = {
        fontWeight: 'bold'
    };

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
                return <DisplayString {...props}/>;
            }

            case 'array': {
                return <DisplayArray {...props}/>;
            }

            case 'number': {
                return <DisplayNumber {...props}/>
            }

            default: {
                return null;
            }
        }

    }

    return (
        <div>
            <Grid>
               <Row>
                    <span style={boldFont}>
                        { props.label }:&nbsp;
                    </span>
                    { props.newLine ? (<br/>): null }
                    <span>
                        { displayProperlyByType(props.value) }
                    </span>
                </Row>
            </Grid>
        </div>
    );
};

DisplayField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    newLine: PropTypes.bool
};

DisplayField.defaultProps = {
    newLine: false
};

export default DisplayField;


