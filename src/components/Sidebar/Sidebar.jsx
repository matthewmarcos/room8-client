import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import './Sidebar.css';

const Sidebar = (props) => {

    const sidebarTextStyle = {
        color: 'black',
        fontWeight: 'bold'
    };

    const sideBarStyle = {
        borderRight: 'solid 1px #999999',
        height: '100%'
    };

    const prefHeaderStyle = {
        backgroundColor: '#DDDDDD'
    };

    const navItemBottomStyle = {
        borderBottom: 'solid 1px #999999'
    };

    return(
        <div className="sidebar">
            <Nav stacked pullLeft={true} style={ sideBarStyle }>
                <LinkContainer to="/preferences">
                    <NavItem style={{ ...prefHeaderStyle, ...navItemBottomStyle }}>
                        <h3 style={ sidebarTextStyle }>Preferences</h3>
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/preferences/when">
                    <NavItem style={{ ...sidebarTextStyle, ...navItemBottomStyle }}>When</NavItem>
                </LinkContainer>
                <LinkContainer to="/preferences/cost">
                    <NavItem style={{ ...sidebarTextStyle, ...navItemBottomStyle }}>Cost</NavItem>
                </LinkContainer>
                <LinkContainer to="/preferences/location">
                    <NavItem style={{ ...sidebarTextStyle, ...navItemBottomStyle }}>Location</NavItem>
                </LinkContainer>
                <LinkContainer to="/preferences/utilities">
                    <NavItem style={{ ...sidebarTextStyle, ...navItemBottomStyle }}>Utilities</NavItem>
                </LinkContainer>
                <LinkContainer to="/preferences/lifestyle">
                    <NavItem style={{ ...sidebarTextStyle, ...navItemBottomStyle }}>Lifestyle</NavItem>
                </LinkContainer>
            </Nav>
        </div>
    );
};

export default Sidebar;
