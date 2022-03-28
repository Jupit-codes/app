import axios from "axios"
import { VALIDATE_ACCOUNT_ERROR,VALIDATE_ACCOUNT_LOADING,VALIDATE_ACCOUNT_SUCCESS} from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
export default ()=>(dispatch)=>{
    dispatch({
        type:VALIDATE_ACCOUNT_SUCCESS,
        payload:null
        
       
    })

    dispatch({
        type:VALIDATE_ACCOUNT_ERROR,
        payload:null
       
    })
   
}