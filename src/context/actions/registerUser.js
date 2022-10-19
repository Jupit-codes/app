import axios from 'axios'
import {EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED, REGISTER_LOADING,REGISTER_ERROR,REGISTER_SUCCESS,PHONE_NUMBER_VALIDATION,PASSWORD_STRENGTH} from '../../constants/actionTypes'
import validator from 'validator'
export default (items)=>(dispatch)=>{

     if(validator.isEmail(items.email)){
        dispatch({
            type:EMAIL_VALIDATE_CHECKED,
        })

        
        if(items.phonenumber.length < 11 || items.phonenumber.length > 11 ){
            
            dispatch({
                type:PHONE_NUMBER_VALIDATION,
                payload:'Incorrect Phonenumber Format. (acceptable format is 081xxxxxxxx)'
            })
            return false
        }
       
        let checker = StrengthChecker(items.password)
        if(checker == "Strong Password" || checker == "Medium Password"){
            dispatch({
                type:PASSWORD_STRENGTH,
                payload:checker
            })
        }
        else{
            dispatch({
                type:PASSWORD_STRENGTH,
                payload:checker
            })
            return false;
        }
        
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

function StrengthChecker(PasswordParameter) {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    if(strongPassword.test(PasswordParameter)) {
        return 'Strong Password';
    } else if(mediumPassword.test(PasswordParameter)) {
        return 'Medium Password';
    } else {
        return 'Weak Password';
    }
}