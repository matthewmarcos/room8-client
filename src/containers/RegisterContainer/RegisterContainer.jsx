import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class RegisterContainer extends Component {

    handleSubmit(e) {
        e.preventDefault();

        const username = e.target.elements['formHorizontalUsername'].value;
        const password = e.target.elements['formHorizontalPassword'].value;
        const password2 = e.target.elements['formHorizontalPassword2'].value;
        const email = e.target.elements['formHorizontalEmail'].value;
        const nickname = e.target.elements['formHorizontalNickname'].value;

        console.log(
            username,
            password,
            password2,
            email,
            nickname
        );
    }

    render() {
        return (
            <div className="register-container">
                <RegisterForm handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}


export default RegisterContainer;
