import axios from 'axios'
import {EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED, REGISTER_LOADING,REGISTER_ERROR,REGISTER_SUCCESS} from '../../constants/actionTypes'
import validator from 'validator'
export default (items)=>(dispatch)=>{

     if(validator.isEmail(items.email)){
        dispatch({
            type:EMAIL_VALIDATE_CHECKED,
        })
        dispatch({
            type:REGISTER_LOADING,
        })

        const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "POST",
            url: `${Base_url}/users/register`,
            headers: {
            "Content-Type": "application/json"
            },
            data:JSON.stringify({username:items.username,email:items.email,phonenumber:items.phonenumber,password:items.password,firstname:items.firstname,lastname:items.lastname})
        }).then(res => {
            
            dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
            
            })
            
        
            console.log('res',res.data)
            

        })
        .catch((err)=>{
            err.response ?
            dispatch({
            type:REGISTER_ERROR,
            payload:err.response.data
            
            }) :
            dispatch({
            type:REGISTER_ERROR,
            payload:'NO CONNECTION'
            
            }) 

            console.log('Error',err)

        
            
        })


    }
    else{
        dispatch({
            type:EMAIL_VALIDATE,
            payload:'Invalid EmailAddress'
            
        })
    }
    
}