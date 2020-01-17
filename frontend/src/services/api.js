import axios from 'axios';


const api = axios.create({
    baseURL: 'https://instaclonefji.herokuapp.com/'
});

export default api;