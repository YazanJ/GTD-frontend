import React, { useEffect, useState } from "react";
import { getActions } from "../api";
import { useParams } from "react-router-dom";
// import { states } from "../constants/ActionConstants";
import ActionRow from "../components/ActionRow";
import CreateAction from "../components/CreateAction";

const ActionScreen = () => {
    const [actions, setActions] = useState([]);
    const { state } = useParams();

    useEffect(() => {
        getActions()
            .then((data) => {
                setActions(data);
            })
            .catch((error) => console.log(error));
    }, []);

    console.log(actions);
    // if (states.includes(state)) {
    //     console.log("yessirr");
    // }

    return (
        <div>
            {actions.map((action) => (
                <div key={action.id}>
                    <ActionRow action={action} />
                </div>
            ))}
            <CreateAction />
        </div>
    );
};

export default ActionScreen;
