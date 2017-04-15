import React, { Component } from 'react';
import EditField from '../EditField/EditField';
import _ from 'lodash';
import { userReducerInitialState } from '../../redux/reducers/UserReducer';


class ProfileEdit extends Component {

    constructor() {
        super();
        const batchCount = 20;
        const batchLastYear = new Date().getFullYear(); //End year of the batches

        let tempUser = {
            ...userReducerInitialState
        };

        const tempOrganizations = tempUser.organizations;
        const tempHobbies = tempUser.hobbies;
        const tempInterests = tempUser.interests;

        delete tempUser.organizations;
        delete tempUser.hobbies;
        delete tempUser.interests;

        this.state = {
            tempUser,
            tempHobbies: [],
            tempOrganizations: [],
            tempInterests: [],

            batchCount,
            batchLastYear,
            yearsOptions: _.times(batchCount, (x) => {
                return x + (batchLastYear - batchCount) + 1;
            }).reverse()
        };
    }

    updateUserProfile() {
        const formData = {
            ...this.state.tempUser,
            organizations: [ ...this.state.tempOrganizations ],
            interests: [ ...this.state.tempInterests ],
            hobbies: [ ...this.state.tempHobbies ]
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props === nextProps) {
            return false;
        }

        const { user } = nextProps;
        const {
            fullName,
            status, // => Dropdown
            cleanliness,
            sex,
            smoker,
            hasOrg,
            gender,
            course,
            batch,
            birthday,
            contactNumber,
            bio,
            nickname,
            email
        } = user;

        this.setState({
            tempUser: {
                fullName,
                nickname,
                status, // => Dropdown
                contactNumber,
                email,
                cleanliness,
                sex,
                gender,
                course,
                batch,
                bio,
                birthday
            },
            tempHobbies: [ ...user.hobbies ],
            tempOrganizations: [ ...user.organizations ],
            tempInterests: [ ...user.interests ]
        });
    }

    handleUserChange(parameter, e) {
        let tempUserCopy = {
            ...this.state.tempUser
        };

        tempUserCopy[parameter] = e.target.value;
        this.setState({
            tempUser: tempUserCopy
        });
    }

    handleArrayChange(parameter, e) {
        let stateCopy = {
            ...this.state
        };

        stateCopy[parameter] = [
            ...e.value
        ];

        this.setState(stateCopy);
    }

    render() {
        if(!this.state.tempUser) {
            return null;
        }

        const marginBottom = {
            marginBottom: 330
        };

        return (
            <div className="profile-index container" style={ marginBottom }>
                <h1>Edit Profile</h1>
                <EditField
                    label="Full Name"
                    value={this.state.tempUser.fullName}
                    currentValue={this.props.user.fullName}
                    handler={this.handleUserChange.bind(this, 'fullName')}/>
                <EditField
                    label="Nickname"
                    value={this.state.tempUser.nickname}
                    currentValue={this.props.user.nickname}
                    handler={this.handleUserChange.bind(this, 'nickname')}/>
                <EditField 
                    options={{
                        type: 'dropdown',
                        values: ['I am looking for a room', 'I have a room']
                    }}
                    label="Status"
                    value={this.state.tempUser.status}
                    currentValue={this.props.user.status}
                    handler={this.handleUserChange.bind(this, 'status')}/>
                <EditField
                    options={{
                        type: 'dropdown',
                        values: ['Male', 'Female', 'Do not know']
                    }}
                    label="Sex"
                    value={this.state.tempUser.sex}
                    currentValue={this.props.user.sex}
                    handler={this.handleUserChange.bind(this, 'sex')}/>
                <EditField
                    label="Gender"
                    value={this.state.tempUser.gender}
                    currentValue={this.props.user.gender}
                    handler={this.handleUserChange.bind(this, 'gender')}/>
                <EditField
                    label="Course"
                    value={this.state.tempUser.course}
                    currentValue={this.props.user.course}
                    handler={this.handleUserChange.bind(this, 'course')}/>
                <EditField 
                    options={{
                        type: 'dropdown',
                        values: [ ...this.state.yearsOptions ]
                    }}
                    label="Batch"
                    value={this.state.tempUser.batch}
                    currentValue={this.props.user.batch}
                    handler={this.handleUserChange.bind(this, 'batch')}/>
                {/* cleanliness - slider */}
                <EditField
                    label="Cleanliness"
                    value={this.state.tempUser.cleanliness}
                    currentValue={this.props.user.cleanliness}
                    handler={this.handleUserChange.bind(this, 'cleanliness')}/>
                <EditField
                    label="Contact Number"
                    value={this.state.tempUser.contactNumber}
                    currentValue={this.props.user.contactNumber}
                    handler={this.handleUserChange.bind(this, 'contactNumber')}/>
                <EditField
                    label="Email"
                    value={this.state.tempUser.email}
                    currentValue={this.props.user.email}
                    handler={this.handleUserChange.bind(this, 'email')}/>
                <EditField
                    label="Birthday"
                    options={{
                        type: 'date'
                    }}
                    value={this.state.tempUser.birthday}
                    currentValue={this.props.user.birthday}
                    handler={this.handleUserChange.bind(this, 'birthday')}/>
                <EditField
                    type="text"
                    label="Bio"
                    value={this.state.tempUser.bio}
                    currentValue={this.props.user.bio}
                    handler={this.handleUserChange.bind(this, 'bio')}/>
                <EditField
                    label="Organizations"
                    value={this.state.tempOrganizations}
                    currentValue={this.props.user.organizations}
                    handler={this.handleArrayChange.bind(this, 'tempOrganizations')}/>
            </div>
        );
    }
};

export default ProfileEdit;
/*
                <EditField
                    type="text"
                    label="Bio"
                    value={this.state.tempUser.bio}
                    currentValue={this.props.user.bio}
                    handler={this.handleUserChange.bind(this, 'bio')}/>
*/


