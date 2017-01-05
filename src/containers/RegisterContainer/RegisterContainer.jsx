import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class RegisterContainer extends Component {

    render() {
        return (
            <div className="register-container">
                <RegisterForm />
            </div>
        );
    }
}


export default RegisterContainer;
