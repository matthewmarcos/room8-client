import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import ListMenu from './ListMenu';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';


class HiddenMenu extends Component {

    constructor() {
        super();

        this.state = {
            tempString: ''
        };
    }

    handleAdd(e) {
        e.preventDefault();
        const { handler, value } = this.props;
        const tempArray = [
            e.target.value,
            value
        ];

        handler({
            value: tempArray
        })
    }

    handleDelete(index) {
        const { handler, value } = this.props;
        let tempArray = [ ...value ];

        tempArray.splice(index, 1);

        handler({ value: tempArray });
    }


    render() {
        const { label, fieldName, handleSubmit, value, currentValue } = this.props;

        // Margin and padding to 0 to reduce animation lag
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                <ListMenu
                    value={ value }
                    handler={this.handleDelete.bind(this)}
                />
            </div>
        );
    }

};


HiddenMenu.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValue: PropTypes.arrayOf(PropTypes.string).isRequired,
    handler: PropTypes.func.isRequired,
    validator: PropTypes.func
};


export default Radium(HiddenMenu);
