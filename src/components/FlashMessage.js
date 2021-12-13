import React from "react";
import { Alert } from "react-bootstrap";

const FlashMessage = ({ type, message }) => {
    const typeToVariant = { error: "danger", success: "success" };

    return (
        <Alert style={{ "text-align": "centre" }} variant={typeToVariant[type]}>
            {message}
        </Alert>
    );
};

export default FlashMessage;
