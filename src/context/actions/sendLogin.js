import axios from 'axios'
import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS} from '../../constants/actionTypes'

export default (items)=>(dispatch)=>{
    
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
    // console.log("items",items.email);
    // return false;
    dispatch({
      type:LOGIN_LOADING,
      
  })
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/users/login`,
        headers: {
          "Content-Type": "application/json"
        },
        data:JSON.stringify({email:items.email,password:items.password})
      }).then(res => {
        console.log(res.data);
      })
      .catch((err)=>{
          console.log('Error',err)
      })
   
}
