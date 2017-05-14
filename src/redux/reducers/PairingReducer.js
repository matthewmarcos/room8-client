import _ from 'lodash';

const pairingReducerInitialState = {
    pair: false // I do not know if this is the appropriate data type
};


export const pairingReducer = (state = pairingReducerInitialState, action) => {
    switch (action.type) {
        case 'RECEIVED_PAIR_DATA': {
            const { payload } = action;
            const { pair } = payload;

            return {
                ...state,
                pair
            };
        }


        case 'LOGOUT_SUCCESS': {
            // Clear the reducer
            return {
                ...state,
                ...pairingReducerInitialState
            };
        }


        default: {
            return state;
        }
    }
}

