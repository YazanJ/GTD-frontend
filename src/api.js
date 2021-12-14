import axios from "axios";
const HOSTNAME = "http://127.0.0.1:3000";

export const getStateChoices = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/state_choices/`);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

// get all actions from db
export const getActions = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/actions/`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all projects from db
export const getProjects = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/projects/`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// get all tags from db
export const getTags = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/tags/`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createAction = async (data) => {
    try {
        const res = await axios.post(`${HOSTNAME}/api/users/actions/`, data);
        return res;
    } catch (error) {
        throw new Error(error.message);
    }
};
