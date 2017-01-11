import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import './Sidebar.css';

const Sidebar = (props) => {

    const preferencesHeaderStyle = {
        color: 'black',
        fontWeight: 'bold'
    };

    return(
        <div className="sidebar">
            <Nav bsStyle="pills" stacked pullLeft={true}>
                <NavItem disabled>
                    <h4 style={ preferencesHeaderStyle } className="text-center">Preferences</h4>
                </NavItem>
                <LinkContainer to="preferences/when">
                    <NavItem>When</NavItem>
                </LinkContainer>
                <LinkContainer to="preferences/cost">
                    <NavItem>Cost</NavItem>
                </LinkContainer>
                <LinkContainer to="preferences/location">
                    <NavItem>Location</NavItem>
                </LinkContainer>
                <LinkContainer to="preferences/utilities">
                    <NavItem>Utilities</NavItem>
                </LinkContainer>
                <LinkContainer to="preferences/lifestyle">
                    <NavItem>Lifestyle</NavItem>
                </LinkContainer>
            </Nav>
        </div>
    );
};

export default Sidebar;
