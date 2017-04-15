import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import Radium from 'radium';

const ListItem = (props) => {

    const { unit, index, handler } = props;

    return (
        <div className="list-unit">
            {`${index + 1}: ${unit}`} <Button onClick={ handler }>x</Button>
        </div>
    );

};

ListItem.propTypes = {
    unit: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired
};
// 

export default Radium(ListItem);
