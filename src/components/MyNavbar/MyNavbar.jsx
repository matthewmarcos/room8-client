import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem, Nav } from 'react-bootstrap';

const MyNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const { links } = props;

    const navLinks = links.map((link, index) => {
        return (
            <LinkContainer onlyActiveOnIndex={true} to={link.to} key={index}>
                <NavItem eventKey={index + 2}>{link.name}</NavItem>
            </LinkContainer>
        );
    });

    return (
        <Nav pullRight={true}>
            { navLinks }
        </Nav>
    );
};

MyNavbar.propTypes = {
    links: React.PropTypes.array
};

export default MyNavbar;

