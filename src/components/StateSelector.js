import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { states } from "../constants/actionConstants";
import { capitaliseFirstLetter } from "../helpers";

const StateSelector = () => {
    const handleSelect = (e) => {
        console.log(e);
    };

    return (
        <DropdownButton
            className="mt-3"
            title="state"
            variant="secondary"
            onSelect={handleSelect}
        >
            {states.map((state) => (
                <Dropdown.Item key={state} eventKey={state}>
                    {capitaliseFirstLetter(state)}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default StateSelector;
