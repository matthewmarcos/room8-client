import React, { PropTypes } from 'react';
import Radium from 'radium';

import ListItem from './ListItem';

const ListMenu = (props) => {

    const { value, handler } = props;
    if(!value) {
        return null;
    }

    function handleWrapper(index, e) {
        handler(index);
    }

    return (
        <div className="list-menu">
            {
                value.map((unit, key) => {
                    return <ListItem 
                                index={key}
                                key={key}
                                unit={unit}
                                handler={handleWrapper.bind(this, key)} 
                            />;
                })
            }
        </div>
    );

};

ListMenu.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    handler: PropTypes.func.isRequired
};

export default Radium(ListMenu);
