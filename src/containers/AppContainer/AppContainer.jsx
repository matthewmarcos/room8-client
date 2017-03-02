import React, { Component } from 'react';

import NavbarContainer from '../NavbarContainer/NavbarContainer';

import './AppContainer.css';

class AppContainer extends Component {


    render() {
        return (
            <div className="app-container">
                <NavbarContainer />
                { this.props.children || 'App Container goes here!' }
            </div>
        );
    }
}


export default AppContainer;
