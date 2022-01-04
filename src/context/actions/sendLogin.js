import axios from 'axios'
export default (items)=>{
    console.log('Items',items)
    //  axios.post(' https://944f-105-112-28-180.ngrok.io/users/login',{
    //     headers: {
    //               "Content-Type": "application/json"
    //             }
    // },JSON.stringify({items:items}))
    // .then(res=>{
    //     console.log('resource',res.data)
    // })
    // .catch((err)=>{
    //      console.log('err',err)
    //  });
    axios({
        method: "POST",
        url: "http://localhost:5000/users/login",
        headers: {
          "Content-Type": "application/json"
        },
        data:JSON.stringify({items:items})
      }).then(res => {
        console.log(res.data);
      })
      .catch((err)=>{
          console.log('Error',err)
      })
   
}
