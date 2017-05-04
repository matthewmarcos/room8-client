import _ from 'lodash';

const matchesReducerInitialState = {
    myStatus: {},
    matches: []
};


export const matchesReducer = (state = matchesReducerInitialState, action) => {
    switch (action.type) {
        case 'RECEIVED_MATCHES_DATA': {
            const { payload } = action;

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


        case 'REMOVE_MATCH_FROM_STATE': {
            //Successful accept or reject match
            const { payload } = action;
            const { targetId } = payload;

            const matches = [ ...state.matches ].filter(x => x.id !== targetId);

            console.log('payload', payload);
            console.log('matches', matches);

            return {
                ...state,
                matches: [
                    ...matches
                ]
            };
        }


        case 'FAILED_TO_MODIFY_MATCHES': {
            //Failed to accept or reject match
            const { payload } = action;

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
