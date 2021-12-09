import axios from "axios";
const HOSTNAME = "http://127.0.0.1:3000";

// get all actions from db
export const getActions = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/actions/`);
        return data;
    } catch (error) {
        return error.message;
    }
};

// get all projects from db
export const getProjects = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/projects/`);
        return data;
    } catch (error) {
        return error.message;
    }
};

export const getTags = async () => {
    try {
        const { data } = await axios.get(`${HOSTNAME}/api/users/tags/`);
        return data;
    } catch (error) {
        return error.message;
    }
};
