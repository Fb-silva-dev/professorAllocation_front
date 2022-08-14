import axios from "axios";

//url base
const api = axios.create({
    baseURL: process.env.REACT_API_BASE_URL ||
        "https://professor-allocation.herokuapp.com",
});

export default api;