import axios from "axios"
import { GET_NOTIFICATION_SUCCESS,GET_NOTIFICATION_ERROR,GET_NOTIFICATION_LOADING} from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
export default (item)=>(dispatch)=>{
    dispatch({
        type:GET_NOTIFICATION_LOADING,
       
    })

    // console.log(item)
    
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
            method: "POST",
            url: `${Base_url}/threshold/notification/fetch`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`
            },
            data:JSON.stringify({addressBTC:item.addressBTC,addressUSDT:item.addressUSDT})
        })
        .then(res=>{
            dispatch({
                type:GET_NOTIFICATION_SUCCESS,
                payload:res.data
            })

            // console.log('Result',res.data)
          
        
        
        })
        .catch(err=>{
            
            dispatch({
                type:GET_NOTIFICATION_ERROR,
                payload:err.response && err.response.data 
            })
            // console.log('REs',err.response)
        
        })

   
}