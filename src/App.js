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
    const [errorMessage, setErrorMessage] = useState("");
    const [newItem, setNewItem] = useState(false);

    useEffect(() => {
        getActions()
            .then((data) => {
                // console.log("DATA", data);
                setActions(data);
            })
            .catch((error) => {
                console.log("ERROR", error);
            });
        // getActions().then(successCallback, failureCallback);

        getProjects()
            .then((data) => {
                // console.log(data);
                setProjects(data);
            })
            .catch((error) => {
                console.log(error);
            });

        getTags().then((data) => {
            setTags(data);
        });
    }, []);

    return (
        <Router>
            <Header setNewItem={setNewItem} />
            <Row>
                <Col md={3}>
                    <Sidebar
                        className="min-vh-100"
                        projects={projects}
                        tags={tags}
                    ></Sidebar>
                </Col>
                <Col md={9}>
                    <main className="py-1">
                        {errorMessage.length ? (
                            <div>{errorMessage}</div>
                        ) : (
                            <MainScreen
                                actions={actions}
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
