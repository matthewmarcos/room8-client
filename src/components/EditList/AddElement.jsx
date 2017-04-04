import React, { PropTypes } from 'react';
import Radium from 'radium';

const AddElement = (props) => {
    return (
        <div className="add-element">
            Add Element is here
        </div>
    );
};

AddElement.PropTypes = {
    'handleAdd': PropTypes.func.isRequired
};

export default Radium(AddElement);
