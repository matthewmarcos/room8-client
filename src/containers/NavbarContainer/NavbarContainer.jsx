import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem } from 'react-bootstrap';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import AuthedNavbar from '../../components/AuthedNavbar/AuthedNavbar';

class NavbarContainer extends Component {

    // Documentation for react-bootstrap navbars:
    // https://react-bootstrap.github.io/components.html#navbars

    constructor() {

        super();

        this.state = {
            splashLinks: [
                {
                    to: '/',
                    name: 'Home'
                },
                {
                    to: '/login',
                    name: 'Login'
                },
                {
                    to: '/register',
                    name: 'Register'
                }
            ]
        };
    }

    getCorrectNavbar() {
        const { isLoggedIn, username, fullName } = this.props.user;
        const { splashLinks } = this.state;

        if(isLoggedIn) {
            return <AuthedNavbar 
                username={username}
                fullName={fullName}
            />
        }
        else {
            return <MyNavbar links={splashLinks} />
        }
    }

    render() {

        const myNavbarStyle = {
            paddingLeft: '40px',
            paddingRight: '40px',
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
                    { this.getCorrectNavbar() }
                </div>
            </Navbar>
        );
    }
}

export default connect(store => {

    const { user } = store;

    return {
        user
    };
})(NavbarContainer);
