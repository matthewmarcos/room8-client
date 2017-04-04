import React from 'react';
import EditString from '../EditString/EditString';
import EditDropdown from '../EditDropdown/EditDropdown';
import EditNumberSlider from '../EditNumberSlider/EditNumberSlider';
import EditTextarea from '../EditTextarea/EditTextarea';
import EditDate from '../EditDate/EditDate';
import EditList from '../EditList/EditList';

const ProfileEdit = (props) => {

    const { user } = props;

    console.log('user', user); //To know the fields
    const batchCount = 20;
    const batchLastYear = new Date().getFullYear(); //End year of the batches
    const ORGANIZATION_EDIT_URL = 'fake_url_here';
    const HOBBIES_EDIT_URL = 'fake_url_here';
    const INTERESTS_EDIT_URL = 'fake_url_here';

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
            <div className="conta">
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
                <EditDate
                    label="Birthday"
                    value={birthday}
                    fieldName="birthday"
                />

                <EditNumberSlider
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
                <EditList
                    label="Organizations"
                    value={organizations}
                    fieldName="organizations"
                    url={ORGANIZATION_EDIT_URL}
                />

                {/* Hobbies */}
                <EditList
                    label="Hobbies"
                    value={hobbies}
                    fieldName="hobbies"
                    url={HOBBIES_EDIT_URL}
                />

                {/* Interests */}
                <EditList
                    label="Interests"
                    value={interests}
                    fieldName="interests"
                    url={INTERESTS_EDIT_URL}
                />

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
