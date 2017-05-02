import React, { PropTypes } from 'react';
import { Table, Tr, Td, Th, Thead } from 'reactable';
import classNames from 'classnames';


const MatchTable = (props) => {
    const { person1, person2 } = props;
    const shouldIncludeCurfewTimeRow = (person1.prefCurfew === 'No' || person1.prefCurfew === 'Do not Care') && ( person2.curfew === 'No' || person2.curfew === 'Do not Care')
    const curfewTimeRow = (
        <Tr style={getStyle(
            10,
            person2.curfewTimeScore
        )}>
            <Th column="option"><span>Curfew Time</span></Th>
            { (person1.prefCurfew === 'Yes') ? <Th column="you"><span>{ person1.prefCurfewTime }</span></Th> : <span>-</span> }
            { (person2.curfew === 'Yes') ? <Th column="roommate"><span>{ person2.curfewTime }</span></Th> : <span>-</span> }
        </Tr>
    );
    const shouldIncludeUtilitiesCostRow = (person1.shouldIncludeUtilities === 'Yes' || person2.shouldIncludeUtilities === 'Yes');
    const utilitiesCostRow1 = (
        <Tr style={getStyle(
            10,
            person2.utilitiesScore
        )}>
            <Th column="option"><span>Utilities Cost (Start)</span></Th>
            { (person1.prefShouldIncludeUtilities === 'No') ? <Th column="you"><span>{ person1.prefUtilitiesPriceRangeStart }</span></Th> : null }
            { (person2.shouldIncludeUtilities === 'No') ?  <Th column="roommate"><span>{ person2.utilitiesPriceRangeStart }</span></Th> : null }
            <Th column="score"><span>{ person2.utilitiesCostScore }</span></Th>
        </Tr>
    );
    const utilitiesCostRow2 = (
        <Tr style={getStyle(
            10,
            person2.utilitiesScore
        )}>
            <Th column="option"><span>Utilities Cost (End)</span></Th>
            { (person1.prefShouldIncludeUtilities === 'No') ? <Th column="you"><span>{ person1.prefUtilitiesPriceRangeEnd }</span></Th> : null }
            { (person2.shouldIncludeUtilities === 'No') ?  <Th column="roommate"><span>{ person2.utilitiesPriceRangeEnd }</span></Th> : null }
        </Tr>
    );
    const shouldIncludeInternetSpeedRow = (person1.prefInternet === 'Yes') || (person2.internet === 'Yes');
    const internetSpeedRow = (
        <Tr style={getStyle(
            10,
            person2.speedRequirement
        )}>
            <Th column="option"><span>Internet Speed</span></Th>
            { (person1.prefInternet === 'Yes') ? <Th column="you"><span>{ person1.prefSpeedRequirement }</span></Th> : '-' }
            { (person2.internet === 'Yes') ? <Th column="roommate"><span>{ person2.speedRequirement }</span></Th> : '-' }
            <Th column="score"><span>{ person2.speedScore }</span></Th>
        </Tr>
    );

    function getStyle(value1, value2) {
        const yellow = {
            backgroundColor: 'yellow'
        };
        const green = {
            backgroundColor: 'lightgreen'
        };

        return (value1 === value2) ? null : yellow;
    }

    function lazyNoEval(user1, user2, prefField1, prefField2) {
        // Treat do not care as a no
        if(user1[prefField1] === 'No' || user1[prefField1] === 'Do not care') {
            return 10;
        }
        else if(user1[prefField1] === user2[prefField2]) {
            return 10;
        }

        return 0;
    }

    return (
        <div className="match-table">
            <Table className="table">
                <Thead>
                    <Th column="option"><span>Option</span></Th>
                    <Th column="you"><span>You</span></Th>
                    <Th column="roommate"><span>Roommate</span></Th>
                    <Th column="score"><span>Score</span></Th>
                </Thead>
                <Tr>
                    <Th column="option"><span>Username</span></Th>
                    <Th column="you"><span>{ person1.myUsername }</span></Th>
                    <Th column="roommate"><span>{ person2.username }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Status</span></Th>
                    <Th column="you"><span>{ person1.myStatus }</span></Th>
                    <Th column="roommate"><span>{ person2.status }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person2.cleanlinessScore,
                    10
                )}>
                    <Th column="option"><span>Cleanliness</span></Th>
                    <Th column="you"><span>{ person1.myCleanliness }</span></Th>
                    <Th column="roommate"><span>{ person2.myCleanliness }</span></Th>
                    <Th column="score"><span>{ person2.cleanlinessScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person2.cleanlinessScore,
                    10
                )}>
                    <Th column="option"><span>Preferred Cleanlines</span></Th>
                    <Th column="you"><span>{ person1.prefCleanliness }</span></Th>
                    <Th column="roommate"><span>{ person2.preferredCleanliness }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.mySex,
                    person2.mySex
                )}>
                    <Th column="option"><span>Sex</span></Th>
                    <Th column="you"><span>{ person1.mySex }</span></Th>
                    <Th column="roommate"><span>{ person2.mySex }</span></Th>
                    <Th column="score"><span>{ person2.sexScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefSex,
                    person2.preferredSex
                )}>
                    <Th column="option"><span>Preferred Sex</span></Th>
                    <Th column="you"><span>{ person1.prefSex }</span></Th>
                    <Th column="roommate"><span>{ person2.preferredSex }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.smokerScore
                )}>
                    <Th column="option"><span>Smoker</span></Th>
                    <Th column="you"><span>{ person1.mySmoker }</span></Th>
                    <Th column="roommate"><span>{ person2.mySmoker }</span></Th>
                    <Th column="score"><span>{ person2.smokerScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefStartDate,
                    person2.startDate
                )}>
                    <Th column="option"><span>Start Date</span></Th>
                    <Th column="you"><span>{ person1.prefStartDate }</span></Th>
                    <Th column="roommate"><span>{ person2.startDate }</span></Th>
                    <Th column="score"><span>{ person2.startDateScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.rentScore
                )}>
                    <Th column="option"><span>Rent (Start)</span></Th>
                    <Th column="you"><span>{ person1.prefRentPriceRangeStart }</span></Th>
                    <Th column="roommate"><span>{ person2.rentPriceRangeStart }</span></Th>
                    <Th column="score"><span>{ person2.rentScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.rentScore
                )}>
                    <Th column="option"><span>Rent (End)</span></Th>
                    {
                        (person1.myStatus === 'I am looking for a room') ? <Th column="you"><span>{ person1.prefRentPriceRangeEnd }</span></Th> : <span>-</span>
                    }

                    {
                        (person2.status === 'I am looking for a room') ? <Th column="roommate"><span>{ person2.rentPriceRangeEnd }</span></Th> : <span>-</span>
                    }
                </Tr>
                <Tr>
                    <Th column="option"><span>Should Include Utilities</span></Th>
                    <Th column="you"><span>{ person1.prefShouldIncludeUtilities }</span></Th>
                    <Th column="roommate"><span>{ person2.shouldIncludeUtilities }</span></Th>
                </Tr>
                { (!shouldIncludeUtilitiesCostRow) ? null : utilitiesCostRow1 }
                { (!shouldIncludeUtilitiesCostRow) ? null : utilitiesCostRow2 }
                {
                   // airconditioning
                   // laundry
                   // cooking
                   // gasStove
                   // electricStove
                   // microwave
                   // waterKettle
                   // internet
                   // torrent
                }
                <Tr>
                    <Th column="option"><span>Utilities</span></Th>
                    <Th column="you"><span>-</span></Th>
                    <Th column="roommate"><span>-</span></Th>
                    <Th column="score"><span>{ person2.utilitiesScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefAirconditioning,
                    person2.airconditioning 
                )}>
                    <Th column="option"><span>Airconditioning</span></Th>
                    <Th column="you"><span>{ person1.prefAirconditioning }</span></Th>
                    <Th column="roommate"><span>{ person2.airconditioning }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefLaundry,
                    person2.laundry
                )}>
                    <Th column="option"><span>Laundry</span></Th>
                    <Th column="you"><span>{ person1.prefLaundry }</span></Th>
                    <Th column="roommate"><span>{ person2.laundry }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefCooking,
                    person2.cooking
                )}>
                    <Th column="option"><span>Cooking</span></Th>
                    <Th column="you"><span>{ person1.prefCooking }</span></Th>
                    <Th column="roommate"><span>{ person2.cooking }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefGasStove,
                    person2.gasStove
                )}>
                    <Th column="option"><span>Gas Stove</span></Th>
                    <Th column="you"><span>{ person1.prefGasStove }</span></Th>
                    <Th column="roommate"><span>{ person2.gasStove }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefElectricStove,
                    person2.electricStove
                )}>
                    <Th column="option"><span>Electric Stove</span></Th>
                    <Th column="you"><span>{ person1.prefElectricStove }</span></Th>
                    <Th column="roommate"><span>{ person2.electricStove }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefMicrowave,
                    person2.microwave
                )}>
                    <Th column="option"><span>Microwave</span></Th>
                    <Th column="you"><span>{ person1.prefMicrowave }</span></Th>
                    <Th column="roommate"><span>{ person2.microwave }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefWaterKettle,
                    person2.waterKettle
                )}>
                    <Th column="option"><span>Water Kettle</span></Th>
                    <Th column="you"><span>{ person1.prefWaterKettle }</span></Th>
                    <Th column="roommate"><span>{ person2.waterKettle }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    person1.prefInternet,
                    person2.internet
                )}>
                    <Th column="option"><span>Internet</span></Th>
                    <Th column="you"><span>{ person1.prefInternet }</span></Th>
                    <Th column="roommate"><span>{ person2.internet }</span></Th>
                </Tr>
                {  shouldIncludeInternetSpeedRow ? internetSpeedRow : null }
                <Tr style={getStyle(
                    person1.prefTorrent,
                    person2.torrent
                )}>
                    <Th column="option"><span>Torrent</span></Th>
                    <Th column="you"><span>{ person1.prefTorrent }</span></Th>
                    <Th column="roommate"><span>{ person2.torrent }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.nearbyRestaurantsScore
                )}>
                    <Th column="option"><span>Nearby Restaurants</span></Th>
                    <Th column="you"><span>{ person1.prefNearbyRestaurants }</span></Th>
                    <Th column="roommate"><span>{ person2.nearbyRestaurants }</span></Th>
                    <Th column="score"><span>{ person2.nearbyRestaurantsScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.travelTimeToUplbScore
                )}>
                    <Th column="option"><span>Travel time to UPLB</span></Th>
                    <Th column="you"><span>{ person1.prefTravelTimeToUplb }</span></Th>
                    <Th column="roommate"><span>{ person2.travelTimeToUplb }</span></Th>
                    <Th column="score"><span>{ person2.travelTimeToUplbScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.locationScore
                )}>
                    <Th column="option"><span>Location</span></Th>
                    <Th column="you"><span>{ person1.prefGeneralLocation }</span></Th>
                    <Th column="roommate"><span>{ person2.generalLocation }</span></Th>
                    <Th column="score"><span>{ person2.locationScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.studyTimeScore
                )}>
                    <Th column="option"><span>Study Time</span></Th>
                    <Th column="you"><span>{ person1.prefStudyTime }</span></Th>
                    <Th column="roommate"><span>{ person2.studyTime }</span></Th>
                    <Th column="score"><span>{ person2.studyTimeScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.guestsInRoomScore
                )}>
                    <Th column="option"><span>Guests In Room</span></Th>
                    <Th column="you"><span>{ person1.prefGuestsInRoom }</span></Th>
                    <Th column="roommate"><span>{ person2.guestsInRoom }</span></Th>
                    <Th column="score"><span>{ person2.guestsInRoomScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.guestsStudyAreaScore
                )}>
                    <Th column="option"><span>Guests Study Area</span></Th>
                    <Th column="you"><span>{ person1.prefGuestsStudyArea }</span></Th>
                    <Th column="roommate"><span>{ person2.guestsStudyArea }</span></Th>
                    <Th column="score"><span>{ person2.guestsStudyAreaScore }</span></Th>
                </Tr>
                <Tr style={getStyle(
                    10,
                    person2.orgScore
                )}>
                    <Th column="option"><span>Organizations</span></Th>
                    <Th column="you"><span>{ person1.myHasOrg }</span></Th>
                    <Th column="roommate"><span>{ person2.hasOrg }</span></Th>
                    <Th column="score"><span>{ person2.orgScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Curfew</span></Th>
                    <Th column="you"><span>{ person1.prefCurfew }</span></Th>
                    <Th column="roommate"><span>{ person2.curfew }</span></Th>
                    <Th column="score"><span>{ person2.curfewTimeScore }</span></Th>
                </Tr>
                { (shouldIncludeCurfewTimeRow) ? null : curfewTimeRow }
                <Tr>
                    <Th column="option"><span>Overall Score</span></Th>
                    <Th column="score"><span style={{
                        textDecoration: 'underline',
                        fontWeight: 'bold'
                    }}> { person2.totalScore } </span></Th>
                </Tr>
            </Table>
        </div>
    );
};


MatchTable.propTypes = {
    person2: PropTypes.object.isRequired,
    person1: PropTypes.object.isRequired,
};


export default MatchTable;
