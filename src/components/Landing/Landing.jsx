import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import landingImage from './landing_hero.gif';
import Radium from 'radium';

const Landing = (props) => {

    const landingStyle = {
        marginTop: '-20px',
        backgroundColor: '#EEEEEE',
        backgroundImage: `url(${ landingImage })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '2000px',
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
                        Hello Pau
                    </Col>
                </Row>
            </Grid> 
        </div>
    );

};

export default Radium(Landing);
