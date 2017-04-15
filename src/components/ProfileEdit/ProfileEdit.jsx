import React, { Component } from 'react';
import EditField from '../EditField/EditField';


class ProfileEdit extends Component {

    constructor() {
        super();
        this.state = {
            tempUser: null,
            tempHobbies: [],
            tempOrganizations: [],
            tempInterests: [],

            batchCount: 20,
            batchLastYear: new Date().getFullYear() //End year of the batches
        };
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
        })
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

    render() {
        if(!this.state.tempUser) {
            return null;
        }

        return (
            <div className="profile-index container">
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
                    type="text"
                    label="Bio"
                    value={this.state.tempUser.bio}
                    currentValue={this.props.user.bio}
                    handler={this.handleUserChange.bind(this, 'bio')}/>
                <EditField
                    options={{
                        type: 'dropdown',
                        values: ['Male', 'Female', 'Do not know']
                    }}
                    label="Sex"
                    value={this.state.tempUser.sex}
                    currentValue={this.props.user.sex}
                    handler={this.handleUserChange.bind(this, 'sex')}/>



            </div>
        );
    }
};

export default ProfileEdit;

