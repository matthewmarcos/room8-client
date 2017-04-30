import React, { PropTypes } from 'react';
import { Table, Tr, Td, Th, Thead } from 'reactable';


const MatchTable = (props) => {

    console.log(props.person1)
    console.log(props.person2)
    const VVVVVVVVVVVVVVVV = 'tempValue';
    return (
        <div className="match-table">
            <Table className="table" data={[
                {
                    Option: VVVVVVVVVVVVVVVV,
                    You: VVVVVVVVVVVVVVVV,
                    Roommate: VVVVVVVVVVVVVVVV,
                    Score: VVVVVVVVVVVVVVVV
                }
            ]}/>
        </div>
    );
};


MatchTable.propTypes = {
    person2: PropTypes.object.isRequired,
    person1: PropTypes.object.isRequired,
};


export default MatchTable;
