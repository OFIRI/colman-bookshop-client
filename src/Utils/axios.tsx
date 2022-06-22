import axios from "axios";


const BASE_URL = '';

export const axios_instance = axios.create({
    baseURL: BASE_URL,
})

export const axios_private_instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export default axios_instance;