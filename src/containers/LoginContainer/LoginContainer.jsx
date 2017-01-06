import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default class LoginContainer extends Component {

     handleSubmit(e) {
        e.preventDefault();

        const username = e.target.elements['formHorizontalUsername'].value;
        const password = e.target.elements['formHorizontalPassword'].value;

         console.log(
            username,
            password
        );
    }

   render() {
        return (<LoginForm handleSubmit={this.handleSubmit.bind(this)}/>);
    }

}
