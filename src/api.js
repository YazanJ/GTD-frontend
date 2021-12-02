import axios from "axios";

export const getActions = async () => {
    const { data } = await axios.get(
        "http://127.0.0.1:3000/api/users/actions/"
    );
    // console.log(data);
    return data;
};
