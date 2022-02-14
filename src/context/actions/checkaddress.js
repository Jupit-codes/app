import axios from "axios"
import { CHECK_ADDRESS_ERROR, CHECK_ADDRESS_LOADING, CHECK_ADDRESS_SUCCESS } from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"
export default (items)=>(dispatch)=>{
    // console.log(reactLocalStorage.getObject('user').btc_wallet[0].address);
    // console.log('item',items)
    
    if(items.receipent_address === reactLocalStorage.getObject('user').btc_wallet[0].address){
        console.log('Hello')
        dispatch({
            type:CHECK_ADDRESS_ERROR,
            payload:'Invalid Wallet Address...Sender Address and Receipent Address Cannot be Same'
        })
        
    }
    else{
        
    dispatch({
        type:CHECK_ADDRESS_LOADING
    })
    
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/threshold/check/customer/Address`,
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${reactLocalStorage.get('token')}`
          
          
        },
        data:JSON.stringify({receipent_address:items.receipent_address,wallet_type:items.wallet_type})
      })
.then(res=>{
    dispatch({
        type:CHECK_ADDRESS_SUCCESS,
        payload:res.data
    })
   
})
.catch(err=>{
    
    dispatch({
        type:CHECK_ADDRESS_ERROR,
        payload:err.response && err.response.data 
    })
   
})

    }
    
    
}