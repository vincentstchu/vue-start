import axios from 'axios';

export default {
  getRoomList(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/getRoomList',{
        params: {
          date: data.date,
          time: data.time,
        }
      }
      )
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
