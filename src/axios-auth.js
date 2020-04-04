import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyDEQ1hEzmGC-6ajOaFx3EPJsF4MVFPJQTw`
    return config;
});

export default instance;