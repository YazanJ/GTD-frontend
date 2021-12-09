import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Container } from "react-bootstrap";
import MainScreen from "./screens/MainScreen";
import { Row, Col } from "react-bootstrap";
import { getActions } from "./api";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    const [actions, setActions] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [newItem, setNewItem] = useState(false);

    // const successCallback = (data) => {
    //     setActions(data);
    // };

    // const failureCallback = (error) => {
    //     console.log("ERRORHERE");
    //     setErrorMessage(error);
    // };

    useEffect(() => {
        getActions()
            .then((data) => {
                console.log(data);
                setActions(data);
            })
            .catch((error) => {
                console.log(error);
            });
        // getActions().then(successCallback, failureCallback);
    }, []);

    return (
        <Router>
            <Header setNewItem={setNewItem} />
            <Row>
                <Col md={3}>
                    <Sidebar className="min-vh-100"></Sidebar>
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
