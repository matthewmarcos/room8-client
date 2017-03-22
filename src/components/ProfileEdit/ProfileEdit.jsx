import React from 'react';
import EditString from '../EditString/EditString';

const ProfileEdit = (props) => {
    return (
        <div className="profile-index">
            <div className="container">
                <h1>Profile Edit goes here</h1>
                <EditString
                    fieldName="test"
                    value="test"
                    minLength={5}
                    label="testlabel"
                />
            </div>
        </div>
    );
};

export default ProfileEdit;
