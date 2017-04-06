const AppReducerInitialState = {
    isFetchingData: false
}
export const appReducer = (state = AppReducerInitialState, action) => {
    switch (action.type) {
        case 'WHO_AM_I_PENDING':
            return {
                ...state,
                isfetchingdata: true
            };


        case 'WHO_AM_I_FULFILLED':
            return {
                ...state,
                isfetchingdata: false
            };


        default:
            return {
                ...state
            };
    }
};
