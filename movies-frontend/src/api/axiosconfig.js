import axios from 'axios';

const baseURL = "https://moviessforuu-production.up.railway.app";

export default axios.create({
    baseURL: baseURL,
    headers: {"ngrok-skip-browser-warning": true,
        "Content-Type":"application/json"
    }
})