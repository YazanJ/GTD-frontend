import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import MainScreen from "./screens/MainScreen";
import { Row, Col } from "react-bootstrap";
import { getActions, getProjects, getTags } from "./api";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    const [actions, setActions] = useState([]);
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [newItem, setNewItem] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getActions()
            .then((data) => {
                setActions(data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });

        getProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });

        getTags()
            .then((data) => {
                setTags(data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <Router>
            <Header setNewItem={setNewItem} />
            <Row>
                <Col sm={5} md={3}>
                    <Sidebar
                        className="min-vh-100"
                        projects={errorMessage.length ? [] : projects}
                        tags={errorMessage.length ? [] : tags}
                    ></Sidebar>
                </Col>
                <Col sm={7} md={9}>
                    <main className="py-1">
                        {errorMessage.length ? (
                            <div>{errorMessage}</div>
                        ) : (
                            <MainScreen
                                actions={actions}
                                projects={projects}
                                tags={tags}
                                newItem={newItem}
                                setNewItem={setNewItem}
                            />
                        )}
                    </main>
                </Col>
            </Row>
        </Router>
    );
};

export default App;
