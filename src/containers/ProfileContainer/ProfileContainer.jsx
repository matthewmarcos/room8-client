import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

class ProfileContainer extends Component {
    render() {
        return (
            <div className="profile-container container-fluid">
                {
                    ( this.props.children &&
                        React.cloneElement(this.props.children, { ...this.props })) ||
                    (<h1 className="text-center">Profile Container here!</h1>)
                }
            </div>
        );
    }
}

ProfileContainer = Radium(ProfileContainer);

export default connect((store) => {
    return {
        user: store.user
    };
})(ProfileContainer);
