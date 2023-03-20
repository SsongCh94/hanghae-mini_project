import axios from "axios";
import { getCookie } from "./cookies";

export const apis = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

export const apis_token = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: getCookie("token"),
    },
});