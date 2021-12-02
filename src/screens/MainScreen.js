import React, { useEffect, useState } from "react";
import { getActions } from "../api";

const ActionScreen = () => {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        getActions().then((data) => setActions(data));
    }, [actions]);

    return <div>MainScreen</div>;
};

export default ActionScreen;
