import React from 'react';
import { MenuItem, NavDropdown, Glyphicon, Badge } from 'react-bootstrap';

const NotificationsList = (props) => {

    const notificationsTitle = (
        <div className="notifications-title">
            <span style={{ lineHeight: 2 }}>
                {/* Different icon on hover */}
                <Glyphicon style={{ fontSize: 17 }} glyph="glyphicon glyphicon-bell"/>
            </span>
            <span>
                <Badge>
                    {2}
                </Badge>
            </span>
        </div>

    );
    // MenuItem[eventKey=$]{Item number$}*5
    return (
        <NavDropdown
            title={notificationsTitle} 
            eventKey={4}
            id="nav-dropdown"
            noCaret
        >
            <MenuItem eventKey="1">Item number1</MenuItem>
            <MenuItem eventKey="2">Item number2</MenuItem>
            <MenuItem eventKey="3">Item number3</MenuItem>
            <MenuItem eventKey="4">Item number4</MenuItem>
            <MenuItem eventKey="5">Item number5</MenuItem>
        </NavDropdown>
    );
};

export default NotificationsList;
