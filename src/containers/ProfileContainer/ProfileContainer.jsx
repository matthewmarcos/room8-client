import React, { Component } from 'react';

class ProfileContainer extends Component {

    render() {
        return (
            <div className="profile-container">
                { this.props.children || (<h1 className="text-center">Profile Container here!</h1>) }
            </div>
        );
    }
}

export default ProfileContainer;
