import React, {Component} from 'react';

import MyNavbar from '../../components/MyNavbar/MyNavbar';

class NavbarContainer extends Component {
    
    constructor() {

        super();

        this.state = {
            links: [
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

    render() {
        const { links } = this.state;

        return (
            <div>
                <MyNavbar links={links}/>
            </div>
        );
    }
}

export default NavbarContainer;
