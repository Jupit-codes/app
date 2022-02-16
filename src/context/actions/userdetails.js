import axios from "axios"
import {USER_DETAILS_ERROR,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS } from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"

export default (_id)=>(dispatch)=>{
   
    dispatch({
        type:USER_DETAILS_LOADING,
       
    })
    const Base_url = process.env.REACT_APP_BACKEND_URL;

   
    
    axios({
        method: "POST",
        url: `https://myjupit.herokuapp.com/users/refresh`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch({
            type:USER_DETAILS_ERROR,
            payload:err.response
        })
        console.log(err.response)
    })
}