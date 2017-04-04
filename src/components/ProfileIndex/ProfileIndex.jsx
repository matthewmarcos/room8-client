import React from 'react';
import { Well, Grid, Row, Col, Image } from 'react-bootstrap';

import TempPhoto from '../AuthedNavbar/profile.jpg';


const ProfileIndex = (props) => {

    const { user } = props;

    const fullNameStyle = {
        fontWeight: 'bold'
    };

    const rowOrderStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'row-reverse'
    };

    return (
        <div className="container-fluid">
            <div className="profile-index">
                <Well>
                    <Grid>
                        <Row style={ rowOrderStyle }>
                            {/* Data column */}
                            <Col xs={12} md={5}>
                            {
                                // This is a temporary photo. Please Change it to something
                                // real from the server
                            }
                                <Image thumbnail src={ TempPhoto }/>
                            </Col>
                            <Col xs={12} md={7}>
                                <h1 style={ fullNameStyle }>{ user.fullName }</h1> 
                                {/* fakeText */}
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        </div>
    );
};

export default ProfileIndex;
