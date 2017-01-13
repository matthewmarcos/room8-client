import React from 'react';
import Radium from 'radium';

import { Grid, Row, Col, Well, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import landingImage from './landing_hero.gif';
import HappyRoommates from './HappyRoommates.jpg';
import CollegeSenior from './CollegeSenior.jpg';

const fillerText = (
    <div className="filler">
        <h1 style={{ fontWeight: 'bold' }}>FIND FANTASTIC ROOMMATES</h1>
            <div>Amet dolorum minus dolor fuga accusamus error iste. Nobis pariatur eveniet consequatur possimus odit exercitationem id, minus. Id ipsa saepe facere eius ducimus, minus quia non. Quos sapiente unde explicabo.</div> <div>Lorem illum unde vero perferendis ipsa inventore at. Dicta laboriosam aliquam magni officia quisquam voluptate in quis maiores provident? Nisi odio vel aut voluptates delectus cupiditate fuga! Repudiandae quidem quisquam.</div> <div>Ipsum quos temporibus ex deserunt assumenda? Impedit quis laboriosam provident qui qui, nam nam. Officia aliquid fugit veniam repudiandae dolore assumenda nostrum voluptas quae perferendis autem, obcaecati. Molestias animi sed.</div>
    </div>
);

const boxStyle = {
    // borderWidth: '1px',
    // borderStyle: 'solid',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '256px',
    width: '356px',
    padding: '5px'
};

const boxes = [{
        to: '/instructions',
        description: 'The introduction text goes here or something',
        image: CollegeSenior
    },{
        to: '/instructions',
        description: 'Insert some stuff here',
        image: CollegeSenior

    },{
        to: '/instructions',
        description: 'Insert some stuff here',
        image: CollegeSenior
    },{
        to: '/instructions',
        description: 'Insert some stuff here',
        image: CollegeSenior
    }].map((data, key) => {

        const myStyle = {
            ...boxStyle,
            backgroundImage: `url(${ data.image })`
        };

        return (
            <div style={ myStyle } key={key}>
                { data.description }
            </div>
        );
    });

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const boxesContainerStyle = {
        marginTop: '20px',
        display: 'flex',

        '@media (min-width: 576px)': {
            justifyContent: 'space-around'
        },

        '@media (max-width: 576px)': {
            marginLeft: 'auto',
            marginRight: 'auto',
            flexDirection: 'column'
        }
    };

    return (
        <div className="landing">
            <div style={ landingStyle }>
                <Button bsSize="large">Room8! Register Now</Button>
            </div>
            <Grid bsClass="container-fluid">
                <Row>
                    <div style={{ height: '30px' }}>
                    </div>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image style={{ marginTop: '15px' }} thumbnail responsive src={HappyRoommates} />
                    </Col>
                    <Col  xs={12} md={8}>
                        <Well>
                            { fillerText }
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <div style={ boxesContainerStyle } className="boxes-container">
                        { boxes }
                    </div>
                </Row>
            </Grid>
        </div>
    );

};

export default Radium(Landing);
