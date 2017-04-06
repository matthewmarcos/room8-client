const AppReducerInitialState = {
    isFetchingData: false
}
export const appReducer = (state = AppReducerInitialState, action) => {
    switch (action.type) {
        case 'WHO_AM_I_PENDING':
            return {
                ...state
            };
        case 'WHO_AM_I_FULFILLED':
            return {
                ...state,
                isLoggedIn: action.payload.data.isLoggedIn
            };
        default:
            return {
                ...state
            };
    }
};
