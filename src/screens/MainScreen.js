import React, { useState, useEffect } from "react";
import ActionContainer from "../components/ActionContainer";
import { useParams } from "react-router-dom";
import { states } from "../constants/actionConstants";
import { getActions, getStateActions, getFocusedActions } from "../api";

const MainScreen = () => {
    // const [isFocus, setIsFocus] = useState(false)
    // const [isActions, setIsActions] = useState(false)
    // const [isProject]
    const [actions, setActions] = useState([]);
    const { state } = useParams();

    useEffect(() => {
        if (states.includes(state)) {
            getStateActions(state)
                .then((data) => {
                    setActions(data);
                })
                .catch((error) => console.log(error));
        } else if (state === "focused") {
            getFocusedActions()
                .then((data) => {
                    setActions(data);
                })
                .catch((error) => console.log(error));
        }
    }, [state]);

    return (
        <div>
            <ActionContainer actions={actions} />
        </div>
    );
};

export default MainScreen;
