import React from 'react';
import Radium from 'radium';

import { Grid, Row, Col, Well, Image } from 'react-bootstrap';

import landingImage from './landing_hero.gif';
import HappyRoommates from './HappyRoommates.jpg';

const fillerText = (
    <div className="filler">
        <h1 style={{ fontWeight: 'bold' }}>FIND FANTASTIC ROOMMATES</h1>
            <div>Amet dolorum minus dolor fuga accusamus error iste. Nobis pariatur eveniet consequatur possimus odit exercitationem id, minus. Id ipsa saepe facere eius ducimus, minus quia non. Quos sapiente unde explicabo.</div> <div>Lorem illum unde vero perferendis ipsa inventore at. Dicta laboriosam aliquam magni officia quisquam voluptate in quis maiores provident? Nisi odio vel aut voluptates delectus cupiditate fuga! Repudiandae quidem quisquam.</div> <div>Ipsum quos temporibus ex deserunt assumenda? Impedit quis laboriosam provident qui qui, nam nam. Officia aliquid fugit veniam repudiandae dolore assumenda nostrum voluptas quae perferendis autem, obcaecati. Molestias animi sed.</div>
    </div>
);

const Landing = (props) => {

    const landingStyle = {
        marginTop: '-20px',
        backgroundColor: '#EEEEEE',
        backgroundImage: `url(${ landingImage })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '87vh',
    };

    return (
        <div className="landing">
            <div style={ landingStyle }>
            </div>
            <Grid>
                <Row>
                    <div style={{ height: '30px' }}>
                    </div>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image style = {{ marginTop: '15px' }} thumbnail responsive src={HappyRoommates} />
                    </Col>
                    <Col  xs={12} md={8}>
                        <Well>
                            { fillerText }
                        </Well>
                    </Col>
                </Row>
            </Grid>
        </div>
    );

};

export default Radium(Landing);
