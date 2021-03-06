import axios from 'axios';

export default {
  toLogin(data,callback, failCallback){
    axios.get('http://localhost:8060/login/toLogin',{
        params: {
          sid: data.sid,
          psw: data.psw,
        }
      })
      .then((response) => {
        console.log('success');
        console.log(response.data);
        callback && callback(response.data);
      })
      .catch((error) => {
        console.log('failed');
        console.log(error);
        failCallback && failCallback(error);
      })
  }
}
