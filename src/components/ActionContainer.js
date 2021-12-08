import React, { useEffect, useState } from "react";
import { getActions } from "../api";
// import { states } from "../constants/ActionConstants";
import ActionRow from "./ActionRow";
import CreateAction from "./CreateAction";

const ActionContainer = ({ actions }) => {
    // const [actions, setActions] = useState([]);

    // useEffect(() => {
    //     getActions()
    //         .then((data) => {
    //             setActions(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    // console.log(actions);

    return (
        <div>
            <b>actions</b>
            {actions.map((action) => (
                <div key={action.id}>
                    <ActionRow action={action} />
                </div>
            ))}
            <CreateAction />
        </div>
    );
};

export default ActionContainer;
