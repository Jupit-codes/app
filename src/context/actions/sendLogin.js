import axios from 'axios'
import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_TEST} from '../../constants/actionTypes'

export default (items)=>(dispatch)=>{

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
        
        dispatch({
          type:LOGIN_SUCCESS,
          payload:res.data
         
        })
      
        

      })
      .catch((err)=>{
        err.response ?
        dispatch({
          type:LOGIN_ERROR,
          payload:err.response.data
         
        }) :
        dispatch({
          type:LOGIN_ERROR,
          payload:'NO CONNECTION'
         
        }) 

      
        
      })
   
}
