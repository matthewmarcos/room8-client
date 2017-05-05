import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { toCamelCase, toSnakeCase } from 'case-converter';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import _ from 'lodash';


import { acceptMatch, declineMatch } from '../../actions/UserActions';
import MatchTable from '../../components/MatchTable/MatchTable';


class MatchesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            currentMatch: this.props.matches[0]
        };
    }


    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                currentMatch: nextProps.matches[0]
            });
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


    handlePrev(e) {
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


    handleNext(e) {
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


    handleAccept(e) {
        let tempIndex = this.state.index;
        const { currentMatch } = this.state;
        const { dispatch } = this.props;

        return dispatch(acceptMatch(currentMatch.id));
    }


    handleDecline(e) {
        let tempIndex = this.state.index;
        const { currentMatch } = this.state;
        const { dispatch } = this.props;

        console.log('Handle Decline');
        console.log(currentMatch.id);
        return dispatch(declineMatch(currentMatch.id));
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
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <MatchTable
                                    person2={this.props.matches[this.state.index]}
                                    person1={this.props.person1}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12}>
                                    <Button
                                        onClick={this.handlePrev.bind(this)}
                                        bsStyle="primary">
                                        Prev
                                    </Button>
                                    <Button
                                        onClick={this.handleNext.bind(this)}
                                        bsStyle="primary">
                                        Next
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button
                                        onClick={this.handleAccept.bind(this)}
                                        bsStyle="primary">
                                        Accept
                                    </Button>
                                    <Button
                                        onClick={this.handleDecline.bind(this)}
                                        bsStyle="primary">
                                        Decline
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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

