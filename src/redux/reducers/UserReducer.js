const userReducerInitialState = {
    isLoggedIn: true,
    username: 'mattemhotep',
    bio: 'I love my SP and my Adviser is so awesome',
    status: 'I am looking for a room',
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

    tempFields: {
        bio: '',
        status: '',
        fullName: '',
        contactNumber: '',
        sex: '',
        gender: '',
        course: '',
        batch: ''
    }
};


// On app start, set the tempFields to what is fetched from server.

// const userReducerInitialState = {
    // isLoggedIn: false,
    // userId: '',
    // status: 'I am looking for a room',
    // username: '',
    // fullName: '',
    // contactNumber: '',
    // sex: 'ApacheHelicopter',
    // gender: 'ApacheHelicopter',
    // course: '',
    // batch:'',
    // birthDate: null,
    // organizations: [],
    // hobbies: [],
    // interests: [],
    // bio: '',
//
    // tempFields: {
        // username: '',
        // bio: '',
        // status: '',
        // fullName: '',
        // userId: '',
        // contactNumber: '',
        // sex: '',
        // gender: '',
        // course: '',
        // batch: ''
    // }
// };

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

        case 'UPDATE_USER_PROPERTY': {
            return {
                ...state
            };
        }

        default: {
            return state;
        }

    }
}
