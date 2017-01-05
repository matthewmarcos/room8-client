import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const MyNavbar = (props) => {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    const myNavbarStyle = {
        paddingLeft: '30px',
        paddingRight: '30px',
        listStyle: 'none'
    };

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
                    <LinkContainer onlyActiveOnIndex={true} to="/">
                        <NavItem eventKey={2}>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer onlyActiveOnIndex={true} to="/login">
                        <NavItem eventKey={3}>Login</NavItem>
                    </LinkContainer>
                    <LinkContainer onlyActiveOnIndex={true} to="/register">
                        <NavItem eventKey={4}>Register</NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        </Navbar>
    );

};

export default MyNavbar;
