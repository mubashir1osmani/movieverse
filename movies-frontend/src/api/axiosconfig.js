import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL
console.log("API BASE URL: ", baseURL)
export default axios.create({
    baseURL: baseURL,
    headers: {"ngrok-skip-browser-warning": true,
        "Content-Type":"application/json"
    }
})