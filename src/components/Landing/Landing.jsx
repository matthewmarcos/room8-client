import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

import landingImage from './landing_hero.gif';
import styles from './Landing.css';

const Landing = (props) => {

    const landingStyle = {
        marginTop: '-20px',
        background: `#EEEEEE url(${ landingImage }) no-repeat center center fixed`,
        height: '2000px',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
    };

    const heroImageStyle = {
        display: 'block',
        margin: 'auto',

        height: 'auto',
        maxHeight: '100%',

        width: 'auto',
        maxWidth: '100%'
    };

    return (
        <div style={ landingStyle }>
            <Grid bsClass="container-fluid">
                <Row>
                    <Col sm={3}>
                        I am compensating for something... weak people looking at my unfinished SP
                    </Col>
                </Row>
            </Grid> 
        </div>
    );

};

export default Landing;
