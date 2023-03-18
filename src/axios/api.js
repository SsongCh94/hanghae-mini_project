import axios from "axios";
import { getCookie } from "./cookies";

const apis = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: {
        Authorization: `Bearer ${getCookie('token')}`
    },
});

export default apis;