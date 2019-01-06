import axios from 'axios';
// let base='http://134.160.170.177:9090';
let  base='http://192.168.16.101:9090';


 const homeList=()=>{
    return axios.get(`${base}/home/getItems`);
}
 const visitAdd=function () {
     var today = new Date();
     var month = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : "0" + (today.getMonth() + 1);
     var day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
     var todayId = today.getFullYear() + "" + month + day;
     var url = `${base}/home/add/${todayId}`;
     axios.get(url).then(function () {
         sessionStorage.setItem('id',todayId);
     })
 }

 const getItemProcess=function (code) {
     let url=`${base}/home/getItemDetailProcess/`+code;
     return axios.get(url)
 }

const getIntroduce=function (code) {
    let url=`${base}/home/getIntroduce/`+code;
    return axios.get(url)
}

export {homeList,visitAdd,getItemProcess,getIntroduce}