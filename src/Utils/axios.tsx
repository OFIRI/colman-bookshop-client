import axios from "axios";


export const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const axios_instance = axios.create({
    baseURL: BASE_URL,
})

export const axios_private_instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export default axios_instance;