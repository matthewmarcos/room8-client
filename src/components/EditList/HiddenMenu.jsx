import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import ListMenu from './ListMenu';
import AddElement from './AddElement';

class HiddenMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Temp state is here. Submit enture tempState to database
            tempValue: []
        };
    }


    componentDidMount() {
        this.setState({
            tempValue: this.props.value
        });
    }


    handleSubmit(e) {

    }


    handleAdd(e) {

    }


    handleDelete(index, e) {
        console.log(`Deleting item number ${index}: ${this.state.tempValue[index]}`);
        let temp = this.state.tempValue;
        temp.splice(index, 1);

        this.setState({
            tempValue: [ ...temp ]
        });
    }


    render() {
        const { label, fieldName, handleSubmit } = this.props;

        // Margin and padding to 0 to reduce animation lag
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
                <div style={{fontStyle: 'italic'}}>{`Editing ${label}`}</div> <AddElement fieldName={fieldName}
                    handleAdd={this.handleAdd.bind(this)}
                />
                <ListMenu
                    tempValue={this.state.tempValue}
                    handleDelete={this.handleDelete.bind(this)}
                />
            </div>
        );
    }

};

HiddenMenu.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.arrayOf(PropTypes.string),
    'url': PropTypes.string.isRequired,
    'handleChange': PropTypes.func.isRequired,
    'handleSubmit': PropTypes.func.isRequired

};

export default Radium(HiddenMenu);
