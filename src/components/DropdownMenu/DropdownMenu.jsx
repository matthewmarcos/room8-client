import React from 'react';
import { Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const DropdownMenu = (props) => {

    const hamburgerTitle = (<Glyphicon style={{ fontSize: 25, verticalAlign: 'middle' }} glyph="glyphicon glyphicon-menu-hamburger"/>);

    return (
        <NavDropdown
            title={hamburgerTitle} 
            eventKey={5}
            id="nav-dropdown2"
        >
            <LinkContainer to="settings/discovery">
                <MenuItem eventKey="5.1">Discovery Settings</MenuItem>
            </LinkContainer>

            <LinkContainer to="preferences">
                <MenuItem eventKey="5.2">Roommate Preferences</MenuItem>
            </LinkContainer>

            <LinkContainer to="profile/edit">
            <MenuItem eventKey="5.4">Edit Profile</MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="instructions">
                <MenuItem eventKey="5.5">Instructions</MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="logout">
                <MenuItem eventKey="5.6">Log Out</MenuItem>
            </LinkContainer>
        </NavDropdown>
    );
};

export default DropdownMenu;
