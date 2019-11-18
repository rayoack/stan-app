import axios from 'axios';

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed'
});

export default api;