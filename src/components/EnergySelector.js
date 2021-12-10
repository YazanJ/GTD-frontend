import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaGenderless } from "react-icons/fa";

const EnergySelector = () => {
    const [energy, setEnergy] = useState("");

    const handleSelect = (e) => {
        setEnergy(e);
    };

    return (
        <DropdownButton
            className="mt-1"
            title={energy.length ? energy : "Energy"}
            variant="secondary"
            onSelect={handleSelect}
        >
            <Dropdown.Item eventKey={"Low"}>
                <FaGenderless />
                Low
            </Dropdown.Item>
            <Dropdown.Item eventKey={"Med"}>
                <FaGenderless />
                <FaGenderless />
                Med
            </Dropdown.Item>
            <Dropdown.Item eventKey={"High"}>
                <FaGenderless />
                <FaGenderless />
                <FaGenderless />
                High
            </Dropdown.Item>
            <hr />
            <Dropdown.Item eventKey={"none"}>None</Dropdown.Item>
        </DropdownButton>
    );
};

export default EnergySelector;
