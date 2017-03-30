import React, { PropTypes, Component } from 'react';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';
import HiddenMenu from './HiddenMenu';
import AddElement from './AddElement';

import Radium from 'radium';


class EditList extends Component {

    constructor() {
        super();

        this.state = {
            tempValue: '',
            isOpen: false // if form is active or not
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Initialize tempValue to what is passed from value in props
        let value;

        if('value' in this.props) {
            value = this.props.value;
        }
        else {
            value = [];
        }

        this.setState({
            tempValue: value
        });
    }


    toggleOpenMode(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    handleChange(e) {
        e.preventDefault();

        console.log('Form change: ', e.target);
    }


    handleSubmit(e) {
        e.preventDefault();

        console.log('Form submitted: ', e.target);
    }

    render() {
        const { label, fieldName, value } = this.props;

        return (
            <div>
                <Grid fluid={true}>
                    <div 
                        onClick={this.toggleOpenMode.bind(this)}
                        style={{ 
                            ':hover': {
                                cursor: 'pointer',
                                backgroundColor: '#dddddd'
                            }
                        }}
                    >
                        <Row>
                            <Col xs={12} sm={4} md={7}>
                                <span style={{
                                    fontWeight:'bold'
                                }}>
                                    {label}
                                </span>
                            </Col>
                            <Col xs={12} sm={4} md={3}>
                                <span style={{
                                    fontStyle: 'italic'
                                }}>
                                    {'Whatever the value is, goes here'}
                                </span>
                            </Col>

                            <Col xs={12} sm={4} md={2}>
                                <Button
                                    bsSize="small"
                                    onClick={this.toggleOpenMode.bind(this)}>
                                    Edit
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <span style={{
                                marginTop: 1,
                                marginBottom: 1
                            }}>
                            </span>
                        </Row>
                    </div>
                    <Collapse in={this.state.isOpen}>
                        <div>
                            Ipsum aspernatur fugit aliquid voluptatibus inventore at ullam explicabo. Odio exercitationem rerum cum fuga et unde amet nulla? Neque facere itaque tenetur temporibus quo. Voluptatibus nam itaque iste distinctio dolorem.
                            Consectetur totam molestiae veniam dolorem aspernatur repellat iure fugiat culpa magnam error. Explicabo consectetur illum eligendi repellat enim ut aperiam repudiandae dolor minus quis? Ducimus tenetur deserunt vel nam impedit.
                            Sit ipsum eaque quo ut in! Cupiditate modi doloremque nostrum fuga et! Incidunt delectus veniam aut aut nulla labore magni recusandae nisi deleniti magni! Nobis dolore nemo veritatis molestiae ducimus.
                        </div>
                        
                    </Collapse>
                </Grid>
            </div>
        );
    }
}

                        // <HiddenMenu
                            // label={this.props.label}
                            // handleSubmit={this.handleSubmit}
                            // handleChange={this.handleChange}
                            // fieldName={this.props.fieldName}
                            // value={this.props.value}
                            // url={this.props.url}
                        // />


/*
 * EditList - component that contains a list of strings.
 *
 * Props:
 * label* - Form label that gets printed in bold
 * fieldName* - Gets plugged as the name attribute of the form.
 * value - initial value. If not specified, will render an empty array
 * handler - handler function
 * minLength - Minimum length of the string it accepts
 * maxLength - Maximum length of the string it accepts
*/
EditList.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.arrayOf(PropTypes.string),
    'url': PropTypes.string.isRequired
};


export default Radium(EditList);
