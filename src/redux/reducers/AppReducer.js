const AppReducerInitialState = {
    isFetchingData: false,
    whoAmIFetching: [],
    isLoggingIn: false,
    isRegistering: false,
    isUpdatingProfile: false,
    isUpdatingOrganizations: false,
    isUpdatingInterests: false,
    isUpdatingHobbies: false
}
export const appReducer = (state = AppReducerInitialState, action) => {
    switch (action.type) {

        case 'WHO_AM_I_PENDING':{
            return {
                ...state,
                whoAmIFetching: [
                    ...state.whoAmIFetching,
                    true
                ]
            };

        }


        case 'WHO_AM_I_FULFILLED': {
            return {
                ...state,
                whoAmIFetching: false
            };
        }


        default:
            return {
                ...state
            };
    }
};
