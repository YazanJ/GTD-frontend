import axios from "axios";

export const getActions = async () => {
    try {
        const { data } = await axios.get(
            "http://127.0.0.1:3000/api/users/actions/"
        );
        return data;
    } catch (error) {
        return error;
    }
};
