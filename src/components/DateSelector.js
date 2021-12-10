import React, { useState } from "react";
import { DropdownButton, Form } from "react-bootstrap";

const DateSelector = () => {
    const [date, setDate] = useState("");
    const handleSelect = (e) => {
        setDate(e);
    };

    return (
        <DropdownButton
            className="mt-1"
            title={date.length ? date : "Due"}
            variant="secondary"
        >
            <Form.Control
                type="date"
                onChange={(e) => handleSelect(e.target.value)}
            />
        </DropdownButton>
    );
};

export default DateSelector;
