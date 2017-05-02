import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { toCamelCase, toSnakeCase } from 'case-converter';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';


import MatchTable from '../../components/MatchTable/MatchTable';


class MatchesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            currentMatch: this.props.matches[0]
        };
        // if(this.props.matches.length > 0) {
            // this.state = {
                // currentMatch: this.props.matches[0]
            // };
        // }
        // else {
            // this.state = {
                // currentMatch: null
            // };
        // }
    }


    nextMatch() {
        const length = this.props.matches.length;
        const newArray = this.props.matches.slice(1, length);

        if(newArray.length > 0) {
            this.setState({
                currentMatch: this.props.matches.slice(1, length)[0]
            });
        }
        else {
            this.setState({
                currentMatch: null
            });
        }
    }


    handleAccept(e) {
        let tempIndex = this.state.index;
        if(this.state.index === 0) {
            tempIndex = this.props.matches.length - 1;
        }
        else {
            tempIndex-=1;
        }

        this.setState({
            index: tempIndex
        });
    }


    handleReject(e) {
        let tempIndex = this.state.index;
        if(this.state.index === this.props.matches.length - 1) {
            tempIndex = 0;
        }
        else {
            tempIndex+=1;
        }

        this.setState({
            index: tempIndex
        });
    }


    render() {
        return (
            <div className="matches-contaner">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1> Matches Container here </h1>
                        </Col>
                    </Row>
                    <Col xs={12} md={6}>
                        <div>
                            <MatchTable
                                person2={this.props.matches[this.state.index]}
                                person1={this.props.person1}
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Button
                            onClick={this.handleAccept.bind(this)}
                            bsStyle="primary">
                            Prev
                        </Button>
                        <Button
                            onClick={this.handleReject.bind(this)}
                            bsStyle="primary">
                            Next
                        </Button>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default connect((store) => {
    const tempPreferences = _.mapKeys(toSnakeCase(store.preferences), (val, key) => { return 'pref_' + key });
    const tempUser = _.mapKeys(toSnakeCase(store.user), (val, key) => { return 'my_' + key });
    const person1 = {
        ...toCamelCase(tempPreferences),
        ...toCamelCase(tempUser)
    };

    return {
        app: store.app,
        myStatus: store.matches.myStatus[0],
        matches: store.matches.matches,
        user: store.user,
        pref: store.preferences,
        person1
    };
})(MatchesContainer);

