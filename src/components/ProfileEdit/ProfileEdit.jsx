import React from 'react';
import EditString from '../EditString/EditString';

const ProfileEdit = (props) => {

    const { user } = props;

    console.log('user', user);

    const {
        fullName,
        nickname,
        status,
        contactNumber,
        email,
        cleanliness,
        sex,
        gender,
        course,
        batch,
        organizations,
        hobbies,
        interests,
        bio,
        birthday
    } = user;

    /*
     * Full Name
     * Status (I am looking for)
     * Contact (string)
     * Email (email)
     * Cleanliness
     * Sex
     * Gender
     * Course
     * Batch
     * Organizations
     * Hobbies
     * Interests
     * Bio
     * Birthday
     */

    return (
        <div className="profile-index">
            <div className="container">
                <h1>Edit Profile</h1>

                <EditString
                    label="Full Name"
                    value={fullName}
                    fieldName="fullName"
                    minLength={5}
                />

                <EditString
                    label="Nickname"
                    value={nickname}
                    fieldName="nickname"
                    minLength={5}
                />

                {/* Status */}

                <EditString
                    label="Contact Number"
                    value={contactNumber}
                    fieldName="contactNumber"
                    minLength={5}
                />

                <EditString
                    label="Email"
                    value={email}
                    fieldName="email"
                    minLength={5}
                />

                {/* Birthday */}

                {/* Cleanliness */}

                {/* Sex */}

                <EditString
                    label="Gender"
                    value={gender}
                    fieldName="gender"
                    minLength={5}
                />

                <EditString
                    label="Course"
                    value={course}
                    fieldName="course"
                    minLength={1}
                />

                {/* Batch */}
                {/* Organizations */}
                {/* Hobbies */}
                {/* Interests */}
                {/* Bio */}


            </div>
        </div>
    );
};

export default ProfileEdit;
