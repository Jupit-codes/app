import axios from 'axios'
import {EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED, REGISTER_LOADING,REGISTER_ERROR,REGISTER_SUCCESS,PHONE_NUMBER_VALIDATION,PASSWORD_STRENGTH} from '../../constants/actionTypes'
import validator from 'validator'
export default (items)=>async (dispatch)=>{

    // if(items.phonenumber < 11){
    //     dispatch({
    //         type:EMAIL_VALIDATE,
    //         payload:'Invalid Phonenumber'
            
    //     })
    //     return false;
    // }


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
    

     if(validator.isEmail(items.email)){

        dispatch({
            type:REGISTER_LOADING,
        })
        await axios({
            method: "GET",
            url: `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_Uc3txjQaImRnJnvVD48jnEpIWelGI&emailAddress=${items.email}`,
            headers: {
            "Content-Type": "application/json"
            },
           
        }).then(res => {
            
           
            if(res.data.freeCheck == "false"){
               
                dispatch({
                    type:REGISTER_ERROR,
                    payload:'DISPOSABLE EMAIL NOT ALLOWED!'
                    
                    }) 
                return false
            }
            else{
                dispatch({
                    type:EMAIL_VALIDATE_CHECKED,
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
            
        
            // console.log('res',res.data)
            

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

            // console.log('Error',err)

        
            
        })
                // console.log('Management',res.data.freeCheck)
            }
           

        })
        .catch((err)=>{

            dispatch({
                type:REGISTER_ERROR,
                payload:'ERROR VERIFIYING EMAIL'
                
                }) 

                return false
        
            // console.log('Error',err)

        
            
        })

         
        
        // dispatch({
        //     type:REGISTER_LOADING,
        // })

        


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