import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import Radium from 'radium';

const ListItem = (props) => {

    const { interest, index } = props;

    return (
        <div className="list-interest">
            {`${index}: ${interest}`} <Button onClick={props.handleDelete}>x</Button>
        </div>
    );

};

ListItem.propTypes = {
    'interest': PropTypes.string.isRequired,
    'index': PropTypes.number.isRequired,
    'handleDelete': PropTypes.func.isRequired
};

export default Radium(ListItem);
