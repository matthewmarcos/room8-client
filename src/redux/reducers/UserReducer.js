const userReducerInitialState = {
    isLoggedIn: false,
    userId: '',
    status: 'I am looking for a room',
    username: '',
    fullName: '',
    contactNumber: '',
    sex: 'ApacheHelicopter',
    gender: 'ApacheHelicopter',
    course: '',
    batch:'',
    birthDate: null,
    organizations: [],
    hobbies: [],
    interests: [],
    bio: ''
};

export const userReducer = (state = userReducerInitialState, action) => {

    const { payload } = action;

    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                isLoggedIn: true,
                username: payload.username
            };
        }
        case 'ACTION_TYPE_2': {
            return state;
        }
        default: {
            return state;
        }
    }
}
