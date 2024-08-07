// frontend/src/services/apiService.js
import axios from 'axios';

const API_URL = '/api/posts';

export const fetchPosts = () => {
    return axios.get(API_URL);
};
