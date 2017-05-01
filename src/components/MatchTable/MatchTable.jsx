import React, { PropTypes } from 'react';
import { Table, Tr, Td, Th, Thead } from 'reactable';
import classNames from 'classnames';


const MatchTable = (props) => {
    const { person1, person2 } = props;
    const shouldIncludeCurfewTimeRow = (person1.prefCurfew === 'No' || person1.prefCurfew === 'Do not Care') && ( person2.curfew === 'No' || person2.curfew === 'Do not Care')
    const curfewTimeRow = (
        <Tr>
            <Th column="option"><span>Curfew Time</span></Th>
            {
                (person1.myCurfew === 'Yes') ? <Th column="you"><span>{ person1.prefCurfewTime }</span></Th> : null
            }

            {
                (person2.curfew === 'Yes') ? <Th column="roommate"><span>{ person2.curfewTime }</span></Th> : null
            }
        </Tr>
    );
    const shouldIncludeUtilitiesCostRow = (person1.shouldIncludeUtilities === 'Yes' || person2.shouldIncludeUtilities === 'Yes');
    const utilitiesCostRow = (
        <div>
            <Tr>
                <Th column="option"><span>Utilities Cost (Start)</span></Th>
                <Th column="you"><span>{ person1.prefUtilitiesPriceRangeStart }</span></Th>
                <Th column="roommate"><span>{ person2.utilitiesPriceRangeStart }</span></Th>
                <Th column="score"><span>{ person2.utilitiesScore }</span></Th>
            </Tr>
            <Tr>
                <Th column="option"><span>Utilities Cost (End)</span></Th>
                <Th column="you"><span>{ person1.prefUtilitiesPriceRangeEnd }</span></Th>
                <Th column="roommate"><span>{ person2.utilitiesPriceRangeEnd }</span></Th>
            </Tr>
        </div>
    );

    function getStyle(value1, value2) {
        return classNames({
            orange: value1 !== value2,
            green: value1 === value2
        })
    }

    console.log(person1);
    console.log(person2);

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
                <Tr>
                    <Th column="option"><span>Cleanliness</span></Th>
                    <Th column="you"><span>{ person1.myCleanliness }</span></Th>
                    <Th column="roommate"><span>{ person2.myCleanliness }</span></Th>
                    <Th column="score"><span>{ person2.cleanlinessScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Preferred Cleanlines</span></Th>
                    <Th column="you"><span>{ person1.prefCleanliness }</span></Th>
                    <Th column="roommate"><span>{ person2.preferredCleanliness }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Sex</span></Th>
                    <Th column="you"><span>{ person1.mySex }</span></Th>
                    <Th column="roommate"><span>{ person2.mySex }</span></Th>
                    <Th column="score"><span>{ person2.sexScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Preferred Sex</span></Th>
                    <Th column="you"><span>{ person1.prefSex }</span></Th>
                    <Th column="roommate"><span>{ person2.preferredSex }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Smoker</span></Th>
                    <Th column="you"><span>{ person1.mySmoker }</span></Th>
                    <Th column="roommate"><span>{ person2.mySmoker }</span></Th>
                    <Th column="score"><span>{ person2.smokerScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Start Date</span></Th>
                    <Th column="you"><span>{ person1.prefStartDate }</span></Th>
                    <Th column="roommate"><span>{ person2.startDate }</span></Th>
                    <Th column="score"><span>{ person2.startDateScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Rent (Start)</span></Th>
                    <Th column="you"><span>{ person1.prefRentPriceRangeStart }</span></Th>
                    <Th column="roommate"><span>{ person2.rentPriceRangeStart }</span></Th>
                    <Th column="score"><span>{ person2.rentScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Rent (End)</span></Th>
                    <Th column="you"><span>{ person1.prefRentPriceRangeEnd }</span></Th>
                    <Th column="roommate"><span>{ person2.rentPriceRangeEnd }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Should Include Utilities</span></Th>
                    <Th column="you"><span>{ person1.prefShouldIncludeUtilities }</span></Th>
                    <Th column="roommate"><span>{ person2.shouldIncludeUtilities }</span></Th>
                </Tr>
                { (shouldIncludeUtilitiesCostRow) ? null : utilitiesCostRow }
                <Tr>
                    <Th column="option"><span>Nearby Restaurants</span></Th>
                    <Th column="you"><span>{ person1.prefNearbyRestaurants }</span></Th>
                    <Th column="roommate"><span>{ person2.nearbyRestaurants }</span></Th>
                    <Th column="score"><span>{ person2.nearbyRestaurantsScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Travel time to UPLB</span></Th>
                    <Th column="you"><span>{ person1.prefTravelTimeToUplb }</span></Th>
                    <Th column="roommate"><span>{ person2.travelTimeToUplb }</span></Th>
                    <Th column="score"><span>{ person2.travelTimeToUplbScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Location</span></Th>
                    <Th column="you"><span>{ person1.prefGeneralLocation }</span></Th>
                    <Th column="roommate"><span>{ person2.generalLocation }</span></Th>
                    <Th column="score"><span>{ person2.locationScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Internet Speed</span></Th>
                    <Th column="you"><span>{ person1.prefSpeedRequirement }</span></Th>
                    <Th column="roommate"><span>{ person2.speedRequirement }</span></Th>
                    <Th column="score"><span>{ person2.speedScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Study Time</span></Th>
                    <Th column="you"><span>{ person1.prefStudyTime }</span></Th>
                    <Th column="roommate"><span>{ person2.studyTime }</span></Th>
                    <Th column="score"><span>{ person2.studyTimeScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Guests In Room</span></Th>
                    <Th column="you"><span>{ person1.prefGuestsInRoom }</span></Th>
                    <Th column="roommate"><span>{ person2.guestsInRoom }</span></Th>
                    <Th column="score"><span>{ person2.guestsInRoomScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Guests Study Area</span></Th>
                    <Th column="you"><span>{ person1.prefGuestsStudyArea }</span></Th>
                    <Th column="roommate"><span>{ person2.guestsStudyArea }</span></Th>
                    <Th column="score"><span>{ person2.guestsStudyAreaScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Organizations</span></Th>
                    <Th column="you"><span>{ person1.myHasOrg }</span></Th>
                    <Th column="roommate"><span>{ person2.hasOrg }</span></Th>
                    <Th column="score"><span>{ person2.orgScore }</span></Th>
                </Tr>
                <Tr>
                    <Th column="option"><span>Curfew</span></Th>
                    <Th column="you"><span>{ person1.prefCurfew }</span></Th>
                    <Th column="roommate"><span>{ person2.curfew }</span></Th>
                </Tr>
                { (shouldIncludeCurfewTimeRow) ? null : curfewTimeRow }
                <Tr>
                    <Th column="option"><span>Overall Score</span></Th>
                    <Th column="score"><span>{ person2.totalScore }</span></Th>
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
