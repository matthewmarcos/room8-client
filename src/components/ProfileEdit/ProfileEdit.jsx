import React from 'react';
import EditString from '../EditString/EditString';
import EditDropdown from '../EditDropdown/EditDropdown';
import EditNumber from '../EditNumber/EditNumber';
import EditTextarea from '../EditTextarea/EditTextarea';

const ProfileEdit = (props) => {

    const { user } = props;

    console.log('user', user); //To know the fields
    const batchCount = 20;
    const batchLastYear = 2016;

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
                <EditDropdown
                    label="Status"
                    value={status}
                    fieldName="status"
                    selectOptions={[
                        {
                            value: 'I am looking for a room',
                            label: 'I am looking for a room',
                        },
                        {
                            value: 'I have a room',
                            label: 'I have a room'
                        }
                    ]}
                />

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

                <EditNumber
                    label="Cleanliness"
                    value={cleanliness}
                    fieldName="cleanliness"
                    min={1}
                    max={10}
                />

                <EditDropdown
                    label="Sex"
                    value={sex}
                    fieldName="sex"
                    selectOptions={[
                        {
                            value: 'Male',
                            label: 'Male',
                        },
                        {
                            value: 'Female',
                            label: 'Female'
                        },
                        {
                            value: 'Do not know',
                            label: 'I do not know'
                        }
                    ]}
                />


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
                <EditDropdown
                    label="University Batch"
                    value={batch}
                    fieldName="batch"
                    selectOptions={[...Array(batchCount).keys()].map((key, index) => {
                        return {
                            value: batchLastYear - index,
                            label: batchLastYear - index
                        };
                    })}
                />

                {/* Organizations */}
                {/* Hobbies */}
                {/* Interests */}
                {/* Bio */}
                <EditTextarea
                    label="Bio"
                    value={bio}
                    fieldName="bio"
                    minLength={1}
                />


            </div>
        </div>
    );
};

export default ProfileEdit;
