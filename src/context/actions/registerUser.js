import {EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED} from '../../constants/actionTypes'
export default (items)=>(dispatch)=>{

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(items.email)){
        dispatch({
            type:EMAIL_VALIDATE_CHECKED,
        })
    }
    else{
        dispatch({
            type:EMAIL_VALIDATE,
            payload:'Invalid EmailAddress'
            
        })
    }
    
}