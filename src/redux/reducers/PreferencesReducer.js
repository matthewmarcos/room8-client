const preferencesReducerInitialState = {
    airconditioning: 'Do not care',
    alcohol: 'Do not care',
    cleanliness: 1,
    cooking: 'Do not care',
    curfew: 'Do not care',
    curfewTime: '21:00:00',
    duration: 'Do not care',
    electricStove: 'Do not care',
    gasStove: 'Do not care',
    generalLocation: '',
    guestsInRoom: 'Do not care',
    guestsStudyArea: 'Do not care',
    internet: 'Do not care',
    laundry: 'Do not care',
    message: 'Do not care',
    microwave: 'Do not care',
    nearbyRestaurants: 'Do not care',
    org: 'Do not care',
    pets: 'Do not care',
    rentPriceRangeEnd: 0,
    rentPriceRangeStart: 0,
    sex: 'Do not care',
    shouldIncludeUtilities: 'Do not care',
    smokers: 'Do not care',
    speedRequirement: 0,
    startDate: new Date().toISOString(),
    studyTime: 'Do not care',
    torrent: 'Do not care',
    travelTimeToUplb: 0,
    utilitiesPriceRangeEnd: 0,
    utilitiesPriceRangeStart: 0,
    waterKettle: 'Do not care',
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
