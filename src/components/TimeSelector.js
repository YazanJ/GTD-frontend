import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { timeOptions } from "../constants/actionConstants";
import { FaClock } from "react-icons/fa";

const TimeSelector = () => {
    const handleSelect = (time) => {
        console.log(time);
    };

    return (
        <DropdownButton
            className="my-3"
            title={<FaClock />}
            variant="secondary"
            onSelect={handleSelect}
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
