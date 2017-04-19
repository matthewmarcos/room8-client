import React, { PropTypes, Component } from 'react';
import { Row, Grid } from 'react-bootstrap';

import DisplayArray from './DisplayArray';
import DisplayString from './DisplayString';
import DisplayNumber from './DisplayNumber';

class DisplayField extends Component {

    constructor(props) {
        super(props);
    }


    shouldComponentUpdate(nextProps) {
        if(this.props === nextProps) {
            return false;
        }

        console.log(`${ this.props.label} is ${ this.props.value }`);

        return true;
    }


    defineType(value) {
        if(typeof value === 'string') {
            return 'string';
        }
        else if(typeof value === 'number') {
            return 'number';
        }
        else if(value && value.constructor === Array) {
            return 'array';
        }
        else if(typeof value === 'boolean') {
            return 'boolean';
        }

        return 'DefaultType';
    }


    displayProperlyByType(value) {
        switch(this.defineType(value)) {
            case 'string': {
                return <DisplayString {...this.props}/>;
            }

            case 'array': {
                return <DisplayArray {...this.props}/>;
            }

            case 'number': {
                return <DisplayNumber {...this.props}/>
            }

            default: {
                return null;
            }
        }

    }


    render() {
        const boldFont = {
            fontWeight: 'bold'
        };

        if(typeof this.props.value === 'undefined') {
            // Temporary Issue
            return (<div style={{boldFont, color: 'red'}}>{ this.props.label }: Error Loading</div>);
        }

        return (
            <div>
                <Grid>
                    <Row>
                        <span style={boldFont}>
                            { this.props.label }:&nbsp;
                        </span>
                        { this.props.newLine ? (<br/>): '' }
                        <span>
                            { this.displayProperlyByType(this.props.value) }
                        </span>
                    </Row>
                </Grid>
            </div>
        );
    }
};


DisplayField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    newLine: PropTypes.bool
};


DisplayField.defaultProps = {
    newLine: false,
    value: ''
};


export default DisplayField;

