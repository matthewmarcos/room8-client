import React from 'react';
import {
    Grid, Row, Col, Form, 
    ControlLabel, FormControl, FormGroup,
    Checkbox, Button
} from 'react-bootstrap';

const RegisterForm = (props) => {

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
            <div className="container-fluid">
                <Grid style={marginTopStyle}>

                    <Row>
                        <Col sm={4} md={4} lg={4} style={{ ...centerStyle, ...loginBannerStyle }}>
                            <h1 className="text-center" style={{ ...loginBannerStyle }}>REGISTER</h1>
                        </Col>
                    </Row>

                    <Row style={marginTopStyle}>
                        <Form horizontal className="text-center">
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
        </div>
    );
};

export default RegisterForm;
