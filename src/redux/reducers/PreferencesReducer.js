const preferencesReducerInitialState = {
    airconditioning: null,
    alcohol: null,
    cleanliness: null,
    cooking: null,
    curfew: null,
    curfewTime: null,
    duration: null,
    electricStove: null,
    gasStove: null,
    generalLocation: null,
    guestsInRoom: null,
    guestsStudyArea: null,
    internet: null,
    laundry: null,
    message: null,
    microwave: null,
    nearbyRestaurants: null,
    org: null,
    pets: null,
    rentPriceRangeEnd: null,
    rentPriceRangeStart: null,
    sex: null,
    shouldIncludeUtilities: null,
    smokers: null,
    speedRequirement: null,
    startDate: null,
    studyTime: null,
    torrent: null,
    travelTimeToUplb: null,
    utilitiesPriceRangeEnd: null,
    utilitiesPriceRangeStart: null,
    waterKettle: null,
};


export const preferencesReducer = (state = preferencesReducerInitialState, action) => {
    switch (action.type) {
        case 'RECEIVED_PREFERENCES_DATA': {
            const { payload } = action;
            let toInsert = {
                ...payload.preferences
            };

            // Getting rid of excess data from the big query
            delete toInsert.username;
            delete toInsert.id;
            delete toInsert.email;
            delete toInsert.nickname;
            delete toInsert.timeRegistered;

            return {
                ...state,
                ...toInsert
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
