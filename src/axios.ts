import axios from 'axios'

 axios.defaults.baseURL = 'http://developers.gictsystems.com/api/dummy/';

const token = '';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;