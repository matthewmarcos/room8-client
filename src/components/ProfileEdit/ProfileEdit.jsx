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

    componentWillMount(prevProps, prevState) {
        const { user } = this.props;
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

    handleUserChange(e) {
        console.log('handleUserChange from profileEdit');
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
                    handler={this.handleUserChange.bind(this)}
                    text
                />


            </div>
        );
    }
};

export default ProfileEdit;

