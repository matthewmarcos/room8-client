import React, { Component } from 'react';
import {
    Grid, Row, Col, Form, 
    ControlLabel, FormControl, FormGroup,
    Button, Well, ButtonGroup
} from 'react-bootstrap';

class RegisterForm extends Component {

    constructor() {
        super();

        this.state = {
            username: 'username',
            password1: '',
            password2: '',
            email: '',
            nickname: 'Nickname'
        };
    }


    validateEmail() {

    }


    validatePassword() {
        const { password1, password2 } = this.state;

        if(password1 !== password2) return 'error';
        if(password1.length < 6) return 'error';
        return null;
    }


    validateNickname() {
        const length = this.state.nickname.length;

        if (length > 12 || length < 3) return 'error';

        return null;
    }


    handleChange(fieldName, e) {
        let tempState = {
            ...this.state
        };

        tempState[fieldName] = e.target.value;
        this.setState(tempState);
    }


    render() {
        const centerStyle = {
            margin: '0 auto',
            float: 'none'
        };

        const loginBannerStyle = {
            fontWeight: 'bold',
            fontSize: '250%'
        }

        const marginTopStyle = {
            marginTop: '30px'
        }


        return (
            <div className="register-form">
            <div className="container">
                <Grid style={marginTopStyle}>

                    <Row>
                        <Col sm={4} md={4} lg={4} style={{ ...centerStyle, ...loginBannerStyle }}>
                            <h1 className="text-center" style={{ ...loginBannerStyle }}>REGISTER</h1>
            </Col>
        </Row>

            <Row style={marginTopStyle}>
                <Well>
                    <Form horizontal onSubmit={this.props.handleSubmit} className="text-center">
                        <FormGroup controlId="formHorizontalUsername">
                            <Col componentClass={ControlLabel} sm={3}>
                                Username
                            </Col>
                            <Col sm={6}>
                                <FormControl type="text" placeholder="Username" />
                            </Col>
                        </FormGroup>

                        <FormGroup
                            validationState={this.validatePassword()}
                            controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password
                                </Col>
                                <Col sm={6}>
                                    <FormControl
                                        onChange={this.handleChange.bind(this, 'password1')}
                                        type="password"
                                        placeholder="Password" />
                                </Col>
                        </FormGroup>

                        <FormGroup
                            validationState={this.validatePassword()}
                            controlId="formHorizontalPassword2">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Retype Password
                                </Col>
                                <Col sm={6}>
                                    <FormControl
                                        onChange={this.handleChange.bind(this, 'password2')}
                                        type="password"
                                        placeholder="Password" />
                                </Col>
                        </FormGroup>

            <FormGroup 
                controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={3}>
                    Email
                </Col>
            <Col sm={6}>
                <FormControl
                    type="email"
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="you@domain.com"/>
            </Col>
        </FormGroup>

            <FormGroup
                validationState={this.validateNickname()}
                controlId="formHorizontalNickname">
                <Col componentClass={ControlLabel} sm={3}>
                    Nickname
                </Col>
            <Col sm={6}>
                <FormControl 
                    type="text"
                    onChange={this.handleChange.bind(this, 'nickname')}
                    placeholder="Nickname"/>
            </Col>
        </FormGroup>

            <FormGroup>
                <Col sm={6} smOffset={3}>
                    <ButtonGroup vertical block>
                        <Button type="submit" bsStyle="primary">
                            REGISTER
                        </Button>
                    </ButtonGroup>
                </Col>
            </FormGroup>
        </Form>
    </Well>
</Row>
                    </Grid>
                </div>
            </div>
        );
    }
};

export default RegisterForm;
