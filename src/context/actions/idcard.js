import axios from "axios"
import { reactLocalStorage } from "reactjs-localstorage"
import { ID_CARD_ERROR,ID_CARD_LOADING,ID_CARD_SUCCESS} from "../../constants/actionTypes"

export default (items)=>(dispatch)=>{
    dispatch({
        type:ID_CARD_LOADING
    })
   
    const Base_url = process.env.REACT_APP_BACKEND_URL;

   
    axios({
        method: "POST",
        url: `${Base_url}/user/verification/submit`,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:{items}
      }).then(res => {
        
        dispatch({
          type:ID_CARD_SUCCESS,
          payload:res.data
         
        })
      
        console.log(res.data)
        

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

        console.log(err.response)

      
        
      })
  
 

}