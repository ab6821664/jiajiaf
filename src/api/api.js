import axios from 'axios';
let base='http://localhost:9090';

export const homeList=()=>{

    return axios.get(`${base}/home/getItems`);

}