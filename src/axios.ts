import axios from 'axios'

 axios.defaults.baseURL = 'http://developers.gictsystems.com/api/dummy/';
 axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



const token = '';

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;