import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const MyNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const myNavbarStyle = {
        paddingLeft: '40px',
        paddingRight: '40px',
        listStyle: 'none'
    };


    const { links } = props;

    const navLinks = links.map((links, index) => {
        return (
            <LinkContainer onlyActiveOnIndex={true} to={links.to} key={index}>
                <NavItem eventKey={index + 2}>{links.name}</NavItem>
            </LinkContainer>

        );
    });

    return (
        <Navbar staticTop={true} inverse={true} fluid={true}>
            <div style={myNavbarStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <NavItem eventKey={1}>Room8!</NavItem>
                        </LinkContainer>
                    </Navbar.Brand>
                    </Navbar.Header>
                <Nav pullRight={true}>
                    { navLinks }
                </Nav>
            </div>
        </Navbar>
    );

};

MyNavbar.propTypes = {
    links: React.PropTypes.array
};

export default MyNavbar;
