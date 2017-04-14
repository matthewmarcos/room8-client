import React from 'react';

const DisplayNumber = (props) => {
    const boldFont = {
        fontWeight: 'bold'
    };

    return (
        <span style={boldFont}>{ props.value }</span>
    );
}

export default DisplayNumber;
