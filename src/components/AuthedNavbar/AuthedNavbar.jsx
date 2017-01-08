import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const AuthedNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const { username } = props;

    return (
        <Nav pullRight={true}>
            <LinkContainer onlyActiveOnIndex={true} to="/profile">
                <NavItem eventKey={2}>{username}</NavItem>
            </LinkContainer>
        </Nav>
    );

};

AuthedNavbar.propTypes = {
    links: React.PropTypes.array
};

export default AuthedNavbar;
