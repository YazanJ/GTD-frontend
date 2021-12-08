import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { states } from "../constants/actionConstants";

const StateSelector = () => {
    const capitaliseFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

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
