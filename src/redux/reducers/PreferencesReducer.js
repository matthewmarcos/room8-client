const preferencesReducerInitialState = {
    wantedCleanliness: 10,
    startDate: new Date().toISOString(),
    duration: 'Indefinitely',

    //Cost
    rentPriceRangeStart: 1000,
    rentPriceRangeEnd: 5000,
    utilities: [
        ''
    ]
};
    //  {/* When */}
    //             {/* Start Date - EditDate */}
    //             {/* Duration - EditDropdown */}

    //         {/* Cost */}
    //             {/* Rent Price Range */}
    //             {/* I want my rent to include utilities - EditDropdown */}
    //             {/* Utilities Price Range */}

    //         {/* Location */}
    //             {/* I want to be a 5 minute walking distance from restaurants */}
    //             {/* I want to be within x minutes to UPLB */}
    //             {/* I want to be within the general area of: */}


    //         {/* Utilities */}
    //             {/* I want to do my own laundry */}
    //             {/* I want to be able to cook */}
    //             {/* Checkbox of Cooking Utilities */}
    //             {/* I want Air Conditioning */}
    //             {/* I want Internet */}
    //             {/* Minimum and Maximum speed */}

    //         {/* Lifestyle */}
    //             {/* I am okay with Alcohol */}
    //             {/* I am okay with Smokers */}
    //             {/* I am okay with roommates affiliated with an org */}
    //             {/* I want to bring guests to the room /}
    //             {/* I need a study area for guests */}
    //             {/* I study best in the */}
    //             {/* I have pets */}
    //                 {/* Small Caged Pets (ex. Hamsters) */}
    //                 {/* Dogs/Cats */}
export const preferencesReducer = (state = preferencesReducerInitialState, action) => {
    switch (action.type) {
        case 'RECEIVED_PREFERENCES_DATA': {
            const { payload } = action;
            return {
                ...state,
                ...payload.preferences
            };
        }


        case 'LOGOUT_SUCCESS': {
            // Clear the reducer
            return {
                ...state,
                ...preferencesReducerInitialState
            };
        }


        default: {
            return state;
        }
    }
}
