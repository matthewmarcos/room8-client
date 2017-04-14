import React from 'react';
import { Well, Grid, Row, Col, Image } from 'react-bootstrap';

import TempPhoto from '../AuthedNavbar/profile.jpg';
import DisplayField from '../DisplayField/DisplayField';


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

    console.log('Wg kng user: ', user);

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
                                <DisplayField
                                    label="Nickname"
                                    value={user.nickname}/>
                                <DisplayField
                                    label="Username"
                                    value={user.username}/>
                                <DisplayField
                                    label="Status"
                                    value={user.status}/>
                                <DisplayField
                                    label="Cleanliness"
                                    value={user.cleanliness}/>
                                <DisplayField
                                    label="Course"
                                    value={user.course}/>
                                <DisplayField
                                    label="Batch"
                                    value={user.batch}/>
                                <DisplayField
                                    label="Sex"
                                    value={user.sex}/>
                                <DisplayField
                                    label="Gender"
                                    value={user.gender}/>
                                <DisplayField
                                    label="Interests"
                                    value={user.interests}/>
                                <DisplayField
                                    label="Organizations"
                                    value={user.organizations}/>
                                <DisplayField
                                    label="Hobbies"
                                    value={user.hobbies}/>
                                <DisplayField
                                    label="Bio"
                                    value={user.bio}
                                    newLine/>
                                <DisplayField
                                    label="Contact Number"
                                    value={user.contactNumber}/>
                                <DisplayField
                                    label="Email"
                                    value={user.email}/>
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        </div>
    );
};

export default ProfileIndex;
