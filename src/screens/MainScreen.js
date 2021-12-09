import React, { useState } from "react";
import ActionContainer from "../components/ActionContainer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const MainScreen = ({ actions, newItem, setNewItem }) => {
    return (
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ActionContainer
                            actions={actions}
                            all={true}
                            newItem={newItem}
                            setNewItem={setNewItem}
                        />
                    }
                />
                <Route
                    path="/actions/:state"
                    element={
                        <ActionContainer
                            actions={actions}
                            all={false}
                            newItem={newItem}
                            setNewItem={setNewItem}
                        />
                    }
                />
            </Routes>
        </Container>
    );
};

export default MainScreen;
