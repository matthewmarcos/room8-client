import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Navbar extends Component {

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    }

    render() {
        return (
            <div className="navbar">
                <Nav bsStyle="pills" activeKey={1} onSelect={x => this.handleSelect(x)}>
                    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                </Nav>
            </div>
        );
    }
}

export default Navbar;
