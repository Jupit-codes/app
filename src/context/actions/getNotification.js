import axios from "axios"
import { GET_NOTIFICATION_SUCCESS,GET_NOTIFICATION_ERROR,GET_NOTIFICATION_LOADING} from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
export default (item)=>(dispatch)=>{
    dispatch({
        type:GET_NOTIFICATION_SUCCESS,
        payload:item
    })

}