import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

import TimeSelector from "./TimeSelector.js";

const CreateAction = () => {
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
                                rows={4}
                                placeholder="Notes"
                            ></Form.Control>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <TimeSelector />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CreateAction;
