import axios from "axios";
import { getCookie } from "./cookies";

<<<<<<< HEAD
const token = getCookie("token");

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
    Authorization: token,
  },
});
=======
const apis = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    headers: {
        Authorization: `Bearer ${getCookie('token')}`
    },
});

export default apis;
>>>>>>> parent of a891f30 (Merge branch 'features/yongmin' into dev)
