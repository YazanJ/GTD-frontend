import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaGenderless } from "react-icons/fa";

const EnergySelector = () => {
    const handleSelect = (e) => {
        console.log(e);
    };

    return (
        <DropdownButton
            className="mt-1"
            title="energy"
            variant="secondary"
            onSelect={handleSelect}
        >
            <Dropdown.Item eventKey={"low"}>
                <FaGenderless />
                low
            </Dropdown.Item>
            <Dropdown.Item eventKey={"med"}>
                <FaGenderless />
                <FaGenderless />
                med
            </Dropdown.Item>
            <Dropdown.Item eventKey={"high"}>
                <FaGenderless />
                <FaGenderless />
                <FaGenderless />
                high
            </Dropdown.Item>
            <hr />
            <Dropdown.Item eventKey={"none"}>none</Dropdown.Item>
        </DropdownButton>
    );
};

export default EnergySelector;
