import React, { PropTypes } from 'react';
import Radium from 'radium';
import { FormGroup, FormControl, Grid, Row, Col, Button, Collapse, Form } from 'react-bootstrap';

const HiddenMenu = (props) => {
    const { label, fieldName, value } = props;

    // Margin and padding to 0 to reduce animation lag
    return (
        <div style={{
            margin: 0,
            padding: 0
        }}>
            <div>Lorem architecto sapiente nobis minima ad sapiente quaerat est expedita. Repellat nostrum excepturi ipsum odio fugit quo? Adipisci aut maiores fugit tenetur vero. Eum dolorum ducimus deserunt ea similique. Officiis.</div>
            <div>Elit soluta quidem excepturi accusamus architecto provident voluptas, assumenda saepe! Molestias nisi commodi laboriosam ducimus id corrupti iste blanditiis! Culpa quo minima autem quos labore quibusdam esse. Modi pariatur mollitia!</div>
            <div>Sit veritatis dignissimos dicta repellendus beatae incidunt, molestias ut! Fuga aliquam beatae deleniti suscipit iure numquam incidunt? Officiis totam neque perferendis vero illo. Quia veritatis iusto eos modi rem? Quo?</div>
            
        </div>
    );
};

            // <Form id={fieldName} onSubmit={props.handleSubmit.bind(this)}>
                // <Row>
                    // <Col xs={12} sm={2} md={2}>
                        // <span style={{
                            // fontStyle: 'italic'
                        // }}>
                            // Change {props.label}
                        // </span>
                    // </Col>
                    // <Col xs={12} sm={8} md={8}>
                        // Something goes here
                    // </Col>
                    // <Col xs={12} sm={2} md={2}>
                    // </Col>
                // </Row>
                // <Row>
                    // <FormGroup
                        // controlId={`${fieldName}-text-form`}>
                        // Something for submitting the form
                        // <Button
                            // bsSize="small"
                            // type="submit">
                            // Change
                        // </Button>
                    // </FormGroup>
                // </Row>
            // </Form>
HiddenMenu.propTypes = {
    'label': PropTypes.string.isRequired,
    'fieldName': PropTypes.string.isRequired,
    'value': PropTypes.arrayOf(PropTypes.string),
    'url': PropTypes.string.isRequired,
    'handleChange': PropTypes.func.isRequired,
    'handleSubmit': PropTypes.func.isRequired

};

export default Radium(HiddenMenu);
