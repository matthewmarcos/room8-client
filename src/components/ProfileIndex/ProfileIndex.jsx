import React from 'react';
import { Well, Grid, Row, Col, Image } from 'react-bootstrap';

import ProfileImage from '../AuthedNavbar/profile.jpg';

const fakeText = (
    <div>
        Ipsum iusto veniam inventore earum asperiores. Ad quam quidem quaerat repellat labore veritatis numquam quisquam repellat, ut. Ad debitis iure accusamus excepturi saepe. Error quae aperiam illum error vitae! Cupiditate.
        Ipsum libero quibusdam odio aut alias maxime dolorum! Dolores voluptas laboriosam iusto a sint soluta. Quae ab similique mollitia adipisci praesentium tenetur. Pariatur placeat obcaecati facere saepe quod! Impedit sint.
        Consectetur numquam in dignissimos commodi tenetur nulla explicabo tempora. Dolore dolorem quasi eos saepe dolorum ipsam fugit error obcaecati vitae? Atque ullam provident sapiente in voluptatum aliquid quos odio facilis?
        Ipsum provident illum pariatur nisi quos. Facere perferendis ipsum exercitationem porro repudiandae suscipit! Ipsa eius quia sapiente voluptates similique minima sequi praesentium nisi ipsam laboriosam. Amet possimus quibusdam quam officia.
        Dolor voluptatum voluptatem accusamus earum sequi asperiores placeat eligendi, deserunt assumenda? Vel voluptatum aut ipsum possimus perferendis repellat. Itaque reiciendis voluptas ullam reiciendis debitis illum debitis reprehenderit beatae cumque? Alias!
        Sit suscipit dolorum nesciunt sapiente accusantium magnam magnam. Sunt quaerat vero mollitia expedita rem eos dolorum! Dolorum impedit eveniet excepturi obcaecati illo error rem? Numquam quisquam commodi facilis molestiae atque?
        Ipsum molestias perspiciatis suscipit nesciunt rem. Sint eum aut laborum cupiditate suscipit sed debitis itaque illum, expedita ducimus velit aliquid esse doloribus exercitationem voluptatum. Quas culpa alias numquam dicta reiciendis?
    </div>
);

const ProfileIndex = (props) => {

    const { user } = props;

    console.log('User object');
    console.log(user);

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
                                <Image thumbnail src={ ProfileImage }/>
                            </Col>
                            <Col xs={12} md={7}>
                                <h1 style={ fullNameStyle }>{ user.fullName }</h1> 
                                { fakeText }
                            </Col>
                        </Row>
                    </Grid>
                </Well>
            </div>
        </div>
    );
};

export default ProfileIndex;
