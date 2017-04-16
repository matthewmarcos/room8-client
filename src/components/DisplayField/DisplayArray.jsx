import React from 'react';

const DisplayArray = (props) => {
    const { value } = props;
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
