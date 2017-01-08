import React, {Component} from 'react';
import { connect } from 'react-redux';

import MyNavbar from '../../components/MyNavbar/MyNavbar';

class NavbarContainer extends Component {
    
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
        const { isLoggedIn } = this.props.user;
    }

    render() {
        const { splashLinks } = this.state;

        return (
            <div>
                <MyNavbar links={splashLinks}/>
            </div>
        );
    }
}

export default connect(store => {

    const { user } = store;

    return {
        user
    };
})(NavbarContainer);
