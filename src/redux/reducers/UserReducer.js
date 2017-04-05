// const userReducerInitialState = {
//     userId: '1234',
//     isLoggedIn: true,
//     username: 'mattemhotep',


//     /* User Profile */
//     fullName: 'Jonathan Crow-Secant',
//     nickname: 'Joe',
//     status: 'I am looking for a room',
//     contactNumber: '1234567',
//     email: 'joe12@gmail.com',
//     cleanliness: 5,
//     sex: 'Male',
//     gender: 'Male',
//     course: 'BS Computer Science',
//     batch: '2013',
//     organizations: ['YSES', 'Jammers', 'Painters'],
//     hobbies: ['guitar', 'drums', 'saxophone', 'dancing'],
//     interests: ['BananaMaking', 'zumba'],
//     bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
//     birthday: new Date()
// };


// On app start, set the tempFields to what is fetched from server.
const userReducerInitialState = {
    userId: '',
    isLoggedIn: false,
    username: '',

    /* User Profile */
    fullName: '',
    nickname: '',
    status: '',
    contactNumber: '',
    email: '',
    cleanliness: 5,
    sex: '',
    gender: '',
    course: '',
    batch: '',
    organizations: [],
    hobbies: [],
    interests: [],
    bio: '',
    birthday: null
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

        case 'REGISTER_PENDING': {
            return {
                ...state
            };
        }


        case 'REGISTER_FULFILLED': {
            console.log('REGISTER_FULFILLED');
            console.log(payload);
            return {
                ...state
            };
        }

        default: {
            return state;
        }

    }
}
