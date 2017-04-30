const matchesReducerInitialState = {
    myStatus: {},
    matches: []
};


export const matchesReducer = (state = matchesReducerInitialState, action) => {
    switch (action.type) {
        case 'RECEIVED_MATCHES_DATA': {
            const { payload } = action;
            console.log

            return {
                ...state,
                matches: [
                    ...payload.results
                ],
                myStatus: {
                    ...payload.userStatus
                }
            };
        }


        case 'LOGOUT_SUCCESS': {
            // Clear the reducer
            return {
                ...state,
                ...matchesReducerInitialState
            };
        }


        default: {
            return state;
        }
    }
}
