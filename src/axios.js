import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-f1bbe/us-central1/api" //THE API  (cloud function) url
});

export default instance;
