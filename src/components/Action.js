import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import TimeSelector from "./TimeSelector.js";
import EnergySelector from "./EnergySelector";
import DateSelector from "./DateSelector.js";
import StateSelector from "./StateSelector";
import ProjectSelector from "./ProjectSelector";

const Action = ({ setNewItem, tags, projects }) => {
    const [todo, setTodo] = useState("");
    const [tag, setTag] = useState("");
    const [note, setNote] = useState("");
    const [time, setTime] = useState("");
    const [energy, setEnergy] = useState("");
    const [date, setDate] = useState("");
    const [state, setState] = useState("");
    const [project, setProject] = useState("");

    return (
        <Card className="mt-5">
            <Card.Body>
                <Row>
                    <Col md={8}>
                        <Form>
                            <Form.Control
                                className="my-3"
                                placeholder="To Do"
                                onChange={(e) => setTodo(e.target.value)}
                            ></Form.Control>
                            <Form.Select
                                className="my-3"
                                aria-label="Tags"
                                onChange={(e) => setTag(e.target.value)}
                            >
                                <option>Tags</option>T
                                {tags.map((tag) => (
                                    <option key={tag.id}>{tag.name}</option>
                                ))}
                            </Form.Select>
                            <Form.Control
                                className="my-3"
                                as="textarea"
                                rows={5}
                                placeholder="Notes"
                                onChange={(e) => setNote(e.target.value)}
                            ></Form.Control>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <TimeSelector time={time} setTime={setTime} />
                        <EnergySelector energy={energy} setEnergy={setEnergy} />
                        <DateSelector date={date} setDate={setDate} />
                        <StateSelector state={state} setState={setState} />
                        <ProjectSelector
                            project={project}
                            setProject={setProject}
                            projects={projects}
                        />
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

export default Action;
