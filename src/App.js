import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Container } from "react-bootstrap";
import MainScreen from "./screens/MainScreen";
import { Row, Col } from "react-bootstrap";
import { getActions } from "./api";

const App = () => {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        getActions()
            .then((data) => {
                setActions(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container>
            <Header />
            <Row>
                <Col md={3}>
                    <Sidebar className="min-vh-100"></Sidebar>
                </Col>
                <Col md={9}>
                    <main className="py-1">
                        <MainScreen actions={actions} />
                    </main>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
