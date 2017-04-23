import _ from 'lodash';
import { browserHistory } from 'react-router';

// On app start, set the tempFields to what is fetched from server.
export const userReducerInitialState = {
    /* important for app state */
    id: '',
    isLoggedIn: false,
    username: '',

    /* User Profile */
    status: '',
    fullName: '',
    nickname: '',
    contactNumber: '',
    email: '',
    cleanliness: 0,
    sex: '',
    gender: '',
    smoker: '',
    course: '',
    batch: '', // Loads as a Number from the server.
    organizations: [],
    hobbies: [],
    interests: [],
    bio: '',
    birthday: new Date().toISOString(),
    timeRegistered: new Date().toISOString()
};


export const userReducer = (state = userReducerInitialState, action) => {

    const { payload } = action;

    switch (action.type) {
        case 'FAKE_LOGIN': {
            return {
                ...state,
                isLoggedIn: true,
                username: payload.username,

                //Fake data here
                fullName: 'Jonathan Crow-Secant',
                userId: '1234',
                contactNumber: '1234567',
                sex: 'Male',
                gender: 'ApacheHelicopter',
                course: 'BS Computer Science',
                batch: '2013',
                birthDate: new Date(),
                organizations: ['YSES', 'Jammers', 'Painters'],
                hobbies: ['guitar'],
                interests: ['BananaMaking'],
                bio: 'I love my SP and my Adviser is so awesome'
            };
        }


        // User logging in
        case 'LOGIN_FAILED': {
            return {
                ...state
            };
        }


        case 'LOGIN_SUCCESS': {
            const { user } = action.payload;

            return {
                ...state,
                ...user,
                isLoggedIn: true
            };
        }


        case 'WHO_AM_I_SUCCESS_TRUE': {
            // Who am I returns a valid account
            return {
                ...state,
                ...action.payload.user,
                isLoggedIn: action.payload.isLoggedIn
            };
        }


        case 'WHO_AM_I_SUCCESS_FALSE': {
            // Who am I returns not logged in
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            };
        }


        case 'WHO_AM_I_FAILED': {
            // Who am I returns not logged in
            return {
                ...state,
                // Clear the store
                ...userReducerInitialState
            };
        }


        case 'LOGOUT_SUCCESS': {
            return {
                ...state,
                ...userReducerInitialState
            };
        }


        case 'RECEIVED_PROFILE_DATA': {
            let { user } = action.payload;

            return {
                ...state,
                ...user
            };
        }


        case 'RECEIVED_ORGANIZATIONS_DATA': {
            const { payload } = action;
            return {
                ...state,
                organizations: [
                    ...payload.organizations
                ]
            };
        }


        case 'RECEIVED_HOBBIES_DATA': {
            const { payload } = action;
            return {
                ...state,
                hobbies: [
                    ...payload.hobbies
                ]
            };
        }


        case 'RECEIVED_INTERESTS_DATA': {
            const { payload } = action;
            return {
                ...state,
                interests: [
                    ...payload.interests
                ]
            };
        }


        case 'REGISTER_FULFILLED': {
            const { payload } = action;

            browserHistory.push('/login');
            return {
                ...state,
            };
        }



        default: {
            return state;
        }

    }
}

