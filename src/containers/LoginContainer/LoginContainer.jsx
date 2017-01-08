import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions';

class LoginContainer extends Component {

     handleSubmit(e) {

        e.preventDefault();

        const username = e.target.elements['formHorizontalUsername'].value;
        const password = e.target.elements['formHorizontalPassword'].value;

        this.props.dispatch(actions.login(username, password));
    }

    render() {
        return (<LoginForm handleSubmit={this.handleSubmit.bind(this)}/>);
    }

}


export default connect((state) => {
    const { user } = state;

    return {
        user
    };

})(LoginContainer);
