import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';

import DisplayField from '../DisplayField/DisplayField';


const PreferencesIndex = (props) => {
    const { pref } = props;

    return (
        <Grid>
            <Row>
                <h1>Preferences - Summary</h1>
            </Row>

            <Row>
                {/* When */}
                <h3>When</h3>
                {/* Start Date - EditDate */}
                <DisplayField
                    type="date"
                    label="Start Date"
                    value={pref.startDate}/>
                {/* Duration - EditDropdown */}
                <DisplayField
                    label="Duration"
                    value={pref.duration}/>

                {/* Cost */}
                <h3>Cost</h3>
                {/* Rent Price Range */}
                <DisplayField
                    label="Rent Mininum"
                    value={pref.rentPriceRangeStart}/>
                <DisplayField
                    label="Rent Maximum"
                    value={pref.rentPriceRangeEnd}/>
                {/* I want my rent to include utilities - EditDropdown */}
                <DisplayField
                    label="Should Include Utilities"
                    value={pref.shouldIncludeUtilities}/>
                {/* Utilities Price Range */}
                <DisplayField
                    label="Utilities Mininum"
                    value={pref.utilitiesPriceRangeStart}/>
                <DisplayField
                    label="Utilities Maximum"
                    value={pref.utilitiesPriceRangeEnd}/>

                {/* Location */}
                <h3>Location</h3>
                {/* I want to be within x minutes to UPLB */}
                <DisplayField
                    label="Travel Time to UPLB"
                    value={pref.travelTimeToUplb}/>
                {/* I want to be within the general area of: */}
                <DisplayField
                    label="General Location"
                    value={pref.generalLocation}/>
                <DisplayField
                    label="There are nearby restaurants"
                    value={pref.nearbyRestaurants}/>


                {/* Utilities */}
                <h3>Utilities</h3>
                {/* I want to do my own laundry */}
                <DisplayField
                    label="Can do laundry"
                    value={pref.laundry}/>
                {/* I want to be able to cook */}
                <DisplayField
                    label="Can cook"
                    value={pref.cooking}/>
                {/* Checkbox of Cooking Utilities */}
                <h4>Cooking Utilities</h4>
                <DisplayField
                    label="Has gas stove"
                    value={pref.gasStove}/>
                <DisplayField
                    label="Has an electric stove"
                    value={pref.electricStove}/>
                <DisplayField
                    label="Has a microwave"
                    value={pref.microwave}/>
                <DisplayField
                    label="Can bring water kettles"
                    value={pref.waterKettle}/>
                {/* I want Air Conditioning */}
                <DisplayField
                    label="Has airconditioning"
                    value={pref.aircon}/>
                {/* I want Internet */}
                <DisplayField
                    label="Internet"
                    value={pref.internet}/>
                {/* Minimum speed */}
                <DisplayField
                    label="Internet speed requirement"
                    value={pref.speedRequirement}/>
                {/* Can torrent */}
                <DisplayField
                    label="Can Torrent"
                    value={pref.torrent}/>

                {/* Lifestyle */}
                <h3>Lifestyle</h3>
                {/* I am okay with Alcohol */}
                <DisplayField
                    label="It is okay for my roommate to drink alcohol"
                    value={pref.alcohol}/>
                {/* I am okay with Smokers */}
                <DisplayField
                    label="Smoking is okay"
                    value={pref.smokers}/>
                {/* Cleanliness */}
                <DisplayField
                    label="My preferred roommate's cleanliness level is"
                    value={pref.cleanliness}/>
                {/* I am okay with roommates affiliated with an org */}
                <DisplayField
                    label="It is okay if my roommate is affiliated with an organization"
                    value={pref.hasOrg}/>
                {/* I want to bring guests to the room */}
                <DisplayField
                    label="It is okay for my roommate to bring guests in the room"
                    value={pref.guestsInRoom}/>
                {/* I need a study area for guests */}
                <DisplayField
                    label="There is a study area for guests"
                    value={pref.guestsStudyArea}/>
                {/* I study best in the */}
                <DisplayField
                    label="Studying is best done in the"
                    value={pref.studyTime}/>
                {/* I have pets */}
                <DisplayField
                    label="Pets are allowed"
                    value={pref.pets}/>
                <h3>Sex</h3>
                <DisplayField
                    label="Sex Preference"
                    value={pref.sex}/>
                <h3>Misc</h3>
                <DisplayField
                    label="Has Curfew"
                    value={pref.curfew}/>
                <DisplayField
                    label="Curfew Time"
                    value={pref.curfewTime}/>
            </Row>
        </Grid>
    );
};

export default connect((store) => {
    return {
        pref: store.preferences
    };
})(PreferencesIndex);
