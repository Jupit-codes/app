import axios from "axios"
import { reactLocalStorage } from "reactjs-localstorage"
import { ID_CARD_ERROR,ID_CARD_LOADING,ID_CARD_SUCCESS} from "../../constants/actionTypes"

export default (items)=>(dispatch)=>{
    dispatch({
        type:ID_CARD_LOADING
    })
   
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    const boundary = "educateAll";
    console.log(items)
    axios({
        method: "POST",
        url: `${Base_url}/users/idcardverification`,
        headers: {
        //   'Content-Type': 'application/json'
          'Content-Type': 'multipart/form-data; boundary' + boundary
        },
        data:JSON.stringify({items})
      }).then(res => {
        
        dispatch({
          type:ID_CARD_SUCCESS,
          payload:res.data
         
        })
      
        console.log('RES',res.data)
        

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

        console.log(err.response.data)

      
        
      })
  
 

}