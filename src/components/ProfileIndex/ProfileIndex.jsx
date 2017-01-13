import React from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';

const ProfileIndex = (props) => {

    const { user } = props;

    console.log('User object');
    console.log(user);

    const fullNameStyle = {
        fontWeight: 'bold'
    };
    return (
        <div className="container-fluid">
            <div className="profile-index">
                <Well>
                    <Grid>
                        <Row>
                            {/* Data column */}
                            <Col xs={12} md={5}>
                                <h1 style={ fullNameStyle }>{ user.fullName }</h1>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        </div>
    );
};

export default ProfileIndex;
