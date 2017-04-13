import axios from 'axios';

/*
    Dispatched by some components to check server if the user is still logged in.
*/
export const whoami = (propName, propValue) => {
    const request = axios.get('/auth/profile');

    return (dispatch) => {
        dispatch({
            type: 'WHO_AM_I_START',
            payload: {}
        });

        request.then(({data}) => {
            const { isLoggedIn } = data;

            if(isLoggedIn) {
                dispatch({
                    type: 'WHO_AM_I_SUCCESS_TRUE',
                    payload: {
                        ...data,
                        isLoggedIn
                    }
                });
            }
            else {
                dispatch({
                    type: 'WHO_AM_I_SUCCESS_FALSE',
                    payload: {
                        ...data,
                        isLoggedIn
                    }
                });

            }
        });

        request.catch((error) => {
            dispatch({
                type: 'WHO_AM_I_FAILED',
                payload: {}
            });
            console.log('error: ', error);
        });
    };
};


export const getProfile = () => {
    const request = axios.get('/api/profile');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'RECEIVED_PROFILE_DATA',
                payload: {
                    ...data
                }
            });
        });

        request.catch(x => x);
    };
}


export const getPreferences = () => {
    const request = axios.get('/api/preferences');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'RECEIVED_PREFERENCES_DATA',
                payload: {
                    ...data
                }
            });
        });

        request.catch(x => x);
    };
}


export const getHobbies = () => {
    const request = axios.get('/api/preferences/hobbies');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'RECEIVED_HOBBIES_DATA',
                payload: {
                    ...data
                }
            });
        });

        request.catch(x => x);
    }
}


export const getOrganizations = () => {
    const request = axios.get('/api/preferences/organizations');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'RECEIVED_ORGANIZATIONS_DATA',
                payload: {
                    ...data
                }
            });
        });

        request.catch(x => x);
    }
}


export const getInterests = () => {
    const request = axios.get('/api/preferences/interests');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: 'RECEIVED_INTERESTS_DATA',
                payload: {
                    ...data
                }
            });
        });

        request.catch(x => x);
    }
}


export const getEverything = () => {
    return (dispatch) => {
        dispatch(getInterests());
        dispatch(getOrganizations());
        dispatch(getHobbies());
        dispatch(getPreferences());
        dispatch(getProfile());
    }
}
