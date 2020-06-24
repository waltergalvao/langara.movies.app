import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    timeout: 1000,
});

// Adds API Key to request
client.interceptors.request.use(function (config) {
    // @TODO Move this to .env
    config.params.api_key = '4cd0da9e697f96065055fec6c7ad4d6c';

    return config;
}, function (error) {
    return Promise.reject(error);
});
