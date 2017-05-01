import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { toCamelCase, toSnakeCase } from 'case-converter';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';


import MatchTable from '../../components/MatchTable/MatchTable';


class MatchesContainer extends Component {
    constructor(props) {
        super(props);

        if(this.props.matches.length > 0) {
            this.state = {
                currentMatch: this.props.matches[0]
            };
        }
        else {
            this.state = {
                currentMatch: null
            };
        }
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


    render() {
        return (
            <div className="matches-contaner">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <h1> Matches Container here </h1>
                        </Col>
                    </Row>

                    <Col xs={12} md={7}>
                        <MatchTable
                            person2={this.state.currentMatch}
                            person1={this.props.person1}
                        />
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

