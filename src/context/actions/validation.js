import axios from "axios"
import { VALIDATE_ACCOUNT_ERROR,VALIDATE_ACCOUNT_LOADING,VALIDATE_ACCOUNT_SUCCESS} from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
export default (item)=>(dispatch)=>{
    dispatch({
        type:VALIDATE_ACCOUNT_LOADING,
       
    })

    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
            method: "POST",
            url: `${Base_url}/users/validate/bvntoaccount/kyc/level2`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":reactLocalStorage.get('token')
            },
            data:JSON.stringify({account_name:item.accountName,account_number:item.accountNumber,bankcode:item.bank,bvn:item.bvn,email:reactLocalStorage.getObject('user').email})
        })
        .then(res=>{
            
                res.data.message  ?  
                
                dispatch({
                    type:VALIDATE_ACCOUNT_SUCCESS,
                    payload:res.data.message
                })
                :

                 
                dispatch({
                    type:VALIDATE_ACCOUNT_ERROR,
                    payload:res.data.err && res.data.err 
                })

                // console.log(res.data)
                

           
          
        
        
        })
        .catch(err=>{
            
            dispatch({
                type:VALIDATE_ACCOUNT_ERROR,
                payload:err.response && err.response.data 
            })

            // console.log('ValidationError',err.response)
            
        
        })

   
}