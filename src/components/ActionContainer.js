import React, { useEffect, useState } from "react";
// import { states } from "../constants/ActionConstants";
import ActionRow from "./ActionRow";
import Action from "./Action";
import { useParams } from "react-router-dom";
import { capitaliseFirstLetter } from "../helpers";

const ActionContainer = ({ actions, all, newItem, setNewItem }) => {
    const { state } = useParams();

    if (all) {
        return (
            <div>
                <b>Actions</b>
                {actions.map((action) => (
                    <div key={action.id}>
                        <ActionRow action={action} />
                    </div>
                ))}
                {newItem && <Action setNewItem={setNewItem} />}
            </div>
        );
    }

    if (state === "focused") {
        const focusedActions = actions.filter(
            (action) => action.is_focused == true
        );
        return (
            <div>
                <b>Focused</b>
                {focusedActions.map((action) => (
                    <div key={action.id}>
                        <ActionRow action={action} />
                    </div>
                ))}
                {newItem && <Action setNewItem={setNewItem} />}
            </div>
        );
    }

    const stateActions = actions.filter((action) => action.state === state);
    return (
        <div>
            <b>{capitaliseFirstLetter(state)}</b>
            {stateActions.length ? (
                stateActions.map((action) => (
                    <div key={action.id}>
                        <ActionRow action={action} />
                    </div>
                ))
            ) : (
                <div>No actions</div>
            )}
            {newItem && <Action setNewItem={setNewItem} />}
        </div>
    );
};

export default ActionContainer;
