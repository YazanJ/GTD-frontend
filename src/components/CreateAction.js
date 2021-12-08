import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import TimeSelector from "./TimeSelector.js";
import EnergySelector from "./EnergySelector";
import DateSelector from "./DateSelector.js";
import StateSelector from "./StateSelector";

const CreateAction = ({ setNewItem }) => {
    return (
        <Card className="mt-5">
            <Card.Body>
                <Row>
                    <Col md={8}>
                        <Form>
                            <Form.Control
                                className="my-3"
                                type="email"
                                placeholder="To Do"
                            ></Form.Control>
                            <Form.Control
                                className="my-3"
                                placeholder="Tags (areas, contacts, labels)"
                            ></Form.Control>
                            <Form.Control
                                className="my-3"
                                as="textarea"
                                rows={5}
                                placeholder="Notes"
                            ></Form.Control>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <TimeSelector />
                        <EnergySelector />
                        <DateSelector />
                        <StateSelector />
                    </Col>
                </Row>
                <Button variant="dark">Save Changes</Button>
                <Button
                    className="mx-2"
                    variant="dark"
                    onClick={() => setNewItem(false)}
                >
                    Cancel
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CreateAction;
