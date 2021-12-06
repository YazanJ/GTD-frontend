import React from "react";
import { DropdownButton, Form } from "react-bootstrap";

const DateSelector = () => {
    const handleSelect = (date) => {
        console.log("DATE", date);
    };

    return (
        <DropdownButton className="mt-1" title="due" variant="secondary">
            <Form.Control
                type="date"
                onChange={(e) => handleSelect(e.target.value)}
            />
        </DropdownButton>
    );
};

export default DateSelector;
