import React, { PropTypes, Component } from 'react';
import Radium from 'radium';
import ListMenu from './ListMenu';
import AddElement from './AddElement';


class HiddenMenu extends Component {

    constructor() {
        super();

        this.state = {
            tempString: ''
        };
    }

    handleAdd(e) {
        const { handler, value } = this.props;
        const tempArray = [
            e.target.value,
            ...value
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
        const { value } = this.props;

        // Margin and padding to 0 to reduce animation lag
        return (
            <div style={{
                margin: 0,
                padding: 0
            }}>
            <AddElement
                    { ...this.props }
                    handler={this.handleAdd.bind(this)}/>
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
