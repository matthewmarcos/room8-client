import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Image } from 'react-bootstrap';

import profileImage from './profile.jpg'; //Temporary Image!
import NotificationsList from '../NotificationsList/NotificationsList';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const AuthedNavbar = (props) => {
    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars
    const { fullName, username } = props;
    const usernameStyle = {
        paddingLeft: 10,
        fontWeight: 'bold'
    };
    const lineHeightStyle = {
        lineHeight: 2, // Forces elements to have same v-align to username
        verticalAlign: 'middle',
        fontWeight: 'bold'
    }

    return (
        <Nav pullRight={true}>
            <LinkContainer onlyActiveOnIndex={true} to="/profile">
                <NavItem eventKey={2}>
                    {/* This is only a temporary image for debugging purposes */}
                    {/* In reality, you want to load profile picture from proxied server */}
                    <Image src={ profileImage } width={27}/>
                    <span style={{ ...usernameStyle, verticalAlign: 'middle' }}>
                        { username }
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
            <NotificationsList {...props}/>
            <DropdownMenu />
       </Nav>
    );
};

AuthedNavbar.propTypes = {
    links: React.PropTypes.array
};

export default AuthedNavbar;
