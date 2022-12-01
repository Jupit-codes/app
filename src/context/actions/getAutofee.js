import axios from "axios"
import { AUTO_FEE_ERROR,AUTO_FEE_SUCCESS,AUTO_FEE_LOADING } from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
import { NavItem } from "react-bootstrap"
export default (item)=>(dispatch)=>{
    dispatch({
        type:AUTO_FEE_LOADING
    })
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/threshold/getautofee`,
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${reactLocalStorage.get('token')}`

        },
        data:JSON.stringify({walletType:item})
      })
.then(res=>{
    dispatch({
        type:AUTO_FEE_SUCCESS,
        payload:res.data
    })
    // console.log(res.data)
   
   
})
.catch(err=>{
    
    dispatch({
        type:AUTO_FEE_ERROR,
        payload:err.response ? err.response.data : 'NO NETWORK CONNECTIONs'
    })
    console.log(err.response)
    
})

}