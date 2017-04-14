import React, { PropTypes } from 'react';
import Radium from 'radium';

import ListItem from './ListItem';

const ListMenu = (props) => {

    const { tempValue } = props;

    return (
        <div className="list-menu">
            {
                tempValue.map((interest, key) => (
                    <ListItem
                        key={key}
                        index={key+1}
                        interest={interest}
                        handleDelete={props.handleDelete.bind(this, key)}
                    />
                ))
            }
        </div>
    );

};

ListMenu.propTypes = {
    'tempValue': PropTypes.arrayOf(PropTypes.string),
    'handleDelete': PropTypes.func.isRequired
};

export default Radium(ListMenu);
