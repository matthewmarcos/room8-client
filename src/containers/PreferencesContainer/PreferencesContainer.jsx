import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from '../../components/Sidebar/Sidebar';

import './PreferencesContainer.css';

class PreferencesContainer extends Component {

    render() {
        return (
            <div style={{
                marginTop: -20,
                height: '100%'
            }}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={2}>
                            <div style={{
                                marginLeft: -10, // Make the menu stick to left wall
                                marginRight: 10
                            }}>
                                <Sidebar />
                            </div>
                        </Col>
                        <Col xs={12} md={10}>
                            <div>
                            {
                                this.props.children || (
                                    <h1 className="text-center">
                                        Preferences Container here!
                                    </h1>
                                )
                            }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PreferencesContainer;
