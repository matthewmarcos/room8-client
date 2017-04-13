import React from 'react';
import { Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../actions/UserActions';
import{ connect } from 'react-redux';

const DropdownMenu = (props) => {
    const { dispatch } = props;
    const hamburgerTitle = (<Glyphicon style={{ fontSize: 25, verticalAlign: 'middle' }} glyph="glyphicon glyphicon-menu-hamburger"/>);

    const handleSelect = (eventKey) => {
    };

    const clickLogout = (e) => {
        e.preventDefault();
        // console.log('Logging out!');
        props.dispatch(logout());
    }

    return (
        <NavDropdown
            title={hamburgerTitle}
            eventKey={5}
            id="nav-dropdown2"
            onSelect={handleSelect}
        >
            <LinkContainer to="discovery">
                <MenuItem eventKey="5.1">Discovery Settings</MenuItem>
            </LinkContainer>

            <LinkContainer to="preferences">
                <MenuItem eventKey="5.2">Roommate Preferences</MenuItem>
            </LinkContainer>

            <LinkContainer to="/profile/edit">
                <MenuItem eventKey="5.4">Edit Profile</MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="instructions">
                <MenuItem eventKey="5.5">Instructions</MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <MenuItem onClick={clickLogout.bind(this)} eventKey="5.6">Log Out</MenuItem>
        </NavDropdown>
    );
};

export default connect((store) => {
    return {
        user: store.user
    };
})(DropdownMenu);
