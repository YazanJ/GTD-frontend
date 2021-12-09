import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { states } from "../constants/actionConstants";
import { capitaliseFirstLetter } from "../helpers";

const StateSelector = () => {
    const [state, setState] = useState("");
    const handleSelect = (e) => {
        setState(e);
    };

    return (
        <DropdownButton
            className="mt-3"
            title={state.length ? state : "state"}
            variant="secondary"
            onSelect={handleSelect}
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
