import axios from 'axios'

axios.defaults.baseURL = 'http://167.172.1.174/';
const token = '';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;