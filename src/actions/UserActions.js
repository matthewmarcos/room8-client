export const login = (username, password) => {
    return {
        type: 'FAKE_LOGIN',
        payload: {
            username,
            password
        }
    };
}

export const changeUserProperty = (propName, propValue) => {
    return {
        type: 'UPDATE_USER_PROPERTY',
        payload: {
            propName,
            propValue
        }
    };
};
