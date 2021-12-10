import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { states } from "../constants/actionConstants";
import { capitalise } from "../helpers";

const StateSelector = ({ state, setState }) => {
    return (
        <DropdownButton
            className="mt-3"
            title={state.length ? state : "State"}
            variant="secondary"
            onSelect={setState}
        >
            {states.map((state) => (
                <Dropdown.Item key={state} eventKey={state}>
                    {state}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default StateSelector;
