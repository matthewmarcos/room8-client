import React, { PropTypes, Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import Moment from 'react-moment';
import * as check from 'typechecker';

import DisplayArray from './DisplayArray';
import DisplayString from './DisplayString';
import DisplayNumber from './DisplayNumber';

class DisplayField extends Component {

    shouldComponentUpdate(nextProps) {
        if(this.props === nextProps) {
            return false;
        }

        // console.log(`${ this.props.label} is ${ this.props.value }`);

        return true;
    }

    defineType(value) {
        if(check.isString(value)) {
            return 'string';
        }
        else if(check.isNumber(value)) {
            return 'number';
        }
        else if(check.isArray(value)) {
            return 'array';
        }
        else if(check.isBoolean(value)) {
            return 'boolean';
        }

        return 'DefaultType';
    }


    displayProperlyByType(value) {
        if(this.props.type && this.props.type === 'date') {
            return <Moment date={value}/>;
        }


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

            case 'date': {
                return <Moment date={this.props.value}/>
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
                <Grid fluid>
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
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    newLine: PropTypes.bool
};


DisplayField.defaultProps = {
    newLine: false,
    value: ''
};


export default DisplayField;

