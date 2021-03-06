import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { timeOptions } from "../constants/actionConstants";
import { FaClock } from "react-icons/fa";

const TimeSelector = ({ time, setTime }) => {
    return (
        <DropdownButton
            className="mt-3"
            title={time.length ? time : <FaClock />}
            variant="secondary"
            onSelect={setTime}
        >
            {timeOptions.map((time) => (
                <Dropdown.Item key={time} eventKey={time}>
                    {time}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default TimeSelector;
