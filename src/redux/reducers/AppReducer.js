const AppReducerInitialState = {
    isFetchingData: false
}
export const appReducer = (state = AppReducerInitialState, action) => {
    switch (action.type) {
        case 'WHO_AM_I_PENDING':
            return {
                ...state,
                isFetchingData: true
            };


        case 'WHO_AM_I_FULFILLED':
            return {
                ...state,
                isFetchingData: false
            };


        default:
            return {
                ...state
            };
    }
};
