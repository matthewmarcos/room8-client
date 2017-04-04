import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import ListMenu from './ListMenu';
import AddElement from './AddElement';
import { Button } from 'react-bootstrap';


class HiddenMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Temp state is here. Submit enture tempState to database
            tempValue: [],
            tempString: ''
        };
    }

    componentDidMount() {
        this.setState({
            tempValue: this.props.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`submitting ${this.state.tempValue} to ${this.props.url}`);
    }

    handleChange(e) {
        this.setState({
            tempString: e.target.value
        });
    }

    handleAdd(e) {
        e.preventDefault();

        this.setState({
            tempValue: [
                this.state.tempString,
                ...this.state.tempValue
            ],
            tempString: ''
        })
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
                <AddElement fieldName={this.props.fieldName}
                    handleAdd={this.handleAdd.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                    fieldName={this.props.fieldName}
                    tempString={this.state.tempString}
                    label={label}
                />
                <ListMenu
                    tempValue={this.state.tempValue}
                    handleDelete={this.handleDelete.bind(this)}
                />
                <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
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
