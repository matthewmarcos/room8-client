import React from 'react';
import { Col } from 'react-bootstrap';

const DisplayArray = (props) => {
    const { value } = props;
    const { length } = value;
    const leftPad = {
        paddingLeft: '10px'
    };

    return (
        <div style={leftPad}>
            {
                value.map((string, key) => {
                    return (
                        <span key={key}>
                            {string}<br/>
                            </span>
                    );
                })
            }
        </div>
    );
}

export default DisplayArray;
