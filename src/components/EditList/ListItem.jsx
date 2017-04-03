import React, { PropTypes } from 'react';
import Radium from 'radium';

const ListItem = (props) => {

    const { interest, index } = props;

    return (
        <div className="list-interest">
            {`${index}: ${interest}`}
        </div>
    );

};

ListItem.propTypes = {
    'interest': PropTypes.string.isRequired,
    'index': PropTypes.number.isRequired
};

export default Radium(ListItem);
