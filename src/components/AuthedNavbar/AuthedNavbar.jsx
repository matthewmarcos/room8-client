import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const AuthedNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const { links } = props;

    const navLinks = links.map((links, index) => {
        return (
            <LinkContainer onlyActiveOnIndex={true} to={links.to} key={index}>
                <NavItem eventKey={index + 2}>{links.name}</NavItem>
            </LinkContainer>

        );
    });


    return (
        <Nav pullRight={true}>
            { navLinks }
        </Nav>
    );

};

AuthedNavbar.propTypes = {
    links: React.PropTypes.array
};

export default AuthedNavbar;
