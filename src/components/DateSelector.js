import React, { useState } from "react";
import { DropdownButton, Form } from "react-bootstrap";

const DateSelector = ({ date, setDate }) => {
    return (
        <DropdownButton
            className="mt-1"
            title={date.length ? date : "Due"}
            variant="secondary"
        >
            <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
            />
        </DropdownButton>
    );
};

export default DateSelector;
