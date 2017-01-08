const preferencesReducerInitialState = {
    wantedCleanliness: 10
};

export const preferencesReducer = (state = preferencesReducerInitialState, action) => {
    switch (action.type) {
        case 'ACTION_TYpE_1': {
            return state;
        }
        case 'ACTION_TYpE_2': {
            return state;
        }
        default: {
            return state;
        }
    }
}
