import React from 'react';
import { 
    Grid, Row, Col, Form, 
    ControlLabel, FormControl, FormGroup,
    Checkbox, Button
} from 'react-bootstrap';
import { Link } from 'react-router';

const LoginForm = (props) => {

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
        <div className="login-form container-fluid">
            <Grid style={marginTopStyle}>

                <Row>
                    <Col sm={4} md={4} lg={4} style={{ ...centerStyle, ...loginBannerStyle }}>
                        <h1 className="text-center" style={{ ...loginBannerStyle }}>LOG IN</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} md={4} lg={4} className="text-center" style={{ ...centerStyle }}>
                        <span className="text-center">Don't have an account yet? <Link to="register">Register now for free!</Link></span>
                    </Col>
                </Row>

                <Row style={marginTopStyle}>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={3}>
                               Username
                            </Col>
                            <Col sm={6}>
                                <FormControl type="text" placeholder="Username" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={3}>
                                Password
                            </Col>
                            <Col sm={4}>
                                <FormControl type="password" placeholder="Password" />
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>
                                <Link to="forgot">Forgot Password?</Link>
                            </Col>
 
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={3} sm={2}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={2}>
                                <Button type="submit">
                                    Sign in
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>

        </Grid>
    </div>
);

};

export default LoginForm;
