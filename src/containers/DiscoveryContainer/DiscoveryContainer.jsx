import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import { toggleDiscovery } from '../../actions/UserActions';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';

class DiscoveryContainer extends Component {

    constructor(props) {
        super(props);
    }


    componentWillReceiveProps(nextProps) {

    }

    onToggle() {
        const { dispatch } = this.props;
        console.log('wee')
        dispatch(toggleDiscovery());
    }

    render() {
        return (
            <div className="discovery-container">
                <Grid>
                    <Row>
                        <Col xs={8}>
                            <h1>Discovery Settings</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            Are your settings complete?:
                        </Col>
                        <Col xs={1}>
                            <Toggle
                                onClick={this.onToggle.bind(this)}
                                on={"Yes"}
                                off={"No"}
                                size="xs"
                                active={this.props.matchMe}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default connect((store) => {
    return {
        matchMe: !!store.user.matchMe
    };

})(DiscoveryContainer);
