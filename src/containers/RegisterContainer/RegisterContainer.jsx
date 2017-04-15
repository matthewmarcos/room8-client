import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import * as actions from '../../actions/UserActions';

class RegisterContainer extends Component {

    handleSubmit(e) {
        e.preventDefault();

        const username = e.target.elements['formHorizontalUsername'].value;
        const password = e.target.elements['formHorizontalPassword'].value;
        const password2 = e.target.elements['formHorizontalPassword2'].value;
        const email = e.target.elements['formHorizontalEmail'].value;
        const nickname = e.target.elements['formHorizontalNickname'].value;

        if(password === password2) {
            this.props.dispatch(actions.register(username, password, nickname, email));
        }
        else {
            console.log('Passwords do not match');
        }
    }

    render() {
        return (
            <div className="register-container">
                <RegisterForm handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}


export default connect((state) => {
    const { user } = state;

    return {
        user
    };

})(RegisterContainer);
