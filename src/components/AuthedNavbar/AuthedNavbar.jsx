import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Image, Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';

import profileImage from './profile.jpg'; //Temporary Image!
import NotificationsList from '../NotificationsList/NotificationsList';

const AuthedNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const { fullName } = props;

    const usernameStyle = { 
        paddingLeft: 10,
        fontWeight: 'bold'
    };

    const lineHeightStyle = {
        lineHeight: 2, // Forces elements to have same v-align to username
        verticalAlign: 'middle',
        fontWeight: 'bold'
    }

    const hamburgerTitle = (<Glyphicon style={{ fontSize: 25, verticalAlign: 'middle' }} glyph="glyphicon glyphicon-menu-hamburger"/>);

    return (
        <Nav pullRight={true}>
            <LinkContainer onlyActiveOnIndex={true} to="/profile">
                <NavItem eventKey={2}>
                    {/* This is only a temporary image for debugging purposes */}
                    {/* In reality, you want to load profile picture from proxied server */}
                    <Image src={ profileImage } width={27}/>
                    <span style={{ ...usernameStyle, verticalAlign: 'middle' }}>
                        { fullName }
                    </span>
                </NavItem>
            </LinkContainer>
            <LinkContainer onlyActiveOnIndex={true} to="/dashboard">
                <NavItem eventKey={3}>
                    <span style={ lineHeightStyle }>
                        Dashboard
                    </span>
                </NavItem>
            </LinkContainer>
            <NotificationsList/>
            <NavDropdown
                title={hamburgerTitle} 
                eventKey={5}
                id="nav-dropdown2"
            >
                <MenuItem eventKey="5.1">Discovery Settings</MenuItem>
                <MenuItem eventKey="5.2">Roommate Preferences</MenuItem>
                <MenuItem eventKey="5.4">Edit Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="5.5">Instructions</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="5.6">Log Out</MenuItem>
            </NavDropdown>
       </Nav>
    );

};

AuthedNavbar.propTypes = {
    links: React.PropTypes.array
};

export default AuthedNavbar;
