import React from 'react';

const DisplayString = (props) => {
    const textStyle = {
        paddingLeft: '15px',
        display: 'block'
    };

    return (
        <span
            style={
                props.newLine ? textStyle : null
            }
        >
            {props.value }
        </span>
    );
}

export default DisplayString;
