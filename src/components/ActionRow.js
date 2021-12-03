import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

const ActionRow = ({ action }) => {
    return (
        <Card className="my-1">
            <Card.Body>
                <Row>
                    <Col md={1}>
                        <Form>
                            <Form.Check aria-label="option 1" />
                        </Form>
                    </Col>
                    <Col md={6}>{action.name}</Col>
                    <Col md={1}>{action.time_required}</Col>
                    <Col md={1}>{action.energy_required}</Col>
                    <Col md={3}>{action.due_date}</Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ActionRow;
