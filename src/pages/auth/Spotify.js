import axios from "axios";

const CLIENT_ID = "6716b71dbb5f4b9e98039dc4c6da6153";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?";
const SCOPES = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}

export default apiClient;