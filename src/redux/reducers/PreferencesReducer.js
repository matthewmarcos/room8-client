const preferencesReducerInitialState = {
    isLoggedIn: false,
    userId: '',
    status: 'I am looking for a room',
    username: '',
    nickname: '',
    fullName: '',
    contactNumber: '',
    sex: 'ApacheHelicopter',
    gender: 'ApacheHelicopter',
    course: '',
    batch:'',
    email: '',
    birthDate: null,
    organizations: [],
    hobbies: [],
    interests: [],
    bio: ''
};

export const preferencesReducer = (state = preferencesReducerInitialState, action) => {
    switch (action.type) {
        case 'ACTION_TYpE_1': {
            return state;
        }
        case 'ACTION_TYpE_2': {
            return state;
        }
        default: {
            return state;
        }
    }
}
