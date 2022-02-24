import axios from "axios"
import { reactLocalStorage } from "reactjs-localstorage"
import { ID_CARD_ERROR,ID_CARD_LOADING,ID_CARD_SUCCESS} from "../../constants/actionTypes"

export default (items)=>(dispatch)=>{
    dispatch({
        type:ID_CARD_LOADING
    })
   
    const Base_url = process.env.REACT_APP_BACKEND_URL;

    console.log('items',items)
    return false;
    axios({
        method: "POST",
        url: `${Base_url}/user/save/idcard/verification/submit`,
        headers: {
          "Content-Type": "application/json"
        },
        data:{email:items.email,password:items.password}
      }).then(res => {
        
        dispatch({
          type:ID_CARD_SUCCESS,
          payload:res.data
         
        })
      
        

      })
      .catch((err)=>{
        err.response ?
        dispatch({
          type:ID_CARD_ERROR,
          payload:err.response.data
         
        }) :
        dispatch({
          type:ID_CARD_ERROR,
          payload:'NO CONNECTION'
         
        }) 

      
        
      })
  
 

}