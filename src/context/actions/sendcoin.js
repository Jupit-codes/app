import axios from "axios"
import {SEND_COIN_ERROR,SEND_COIN_LOADING,SEND_COIN_SUCCESS } from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"

export default (item)=>(dispatch)=>{
   

    dispatch({
        type:SEND_COIN_LOADING,
       
    })

    // return false;
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    
   
    
    axios({
        method: "POST",
        url: `${Base_url}/threshold/transfer/coin/`,
        headers:{
            "Content-Type":"application/json",
            "Authorization":reactLocalStorage.get('token')
        },
        data:JSON.stringify({
            receipentaddress:item.ReceipentAddress,
            block_average:item.block_average,
            auto_fee:item.networkFee,
            networkFee:item.networkFee,
            wallet_type:item.wallet_type,
            userid:item.userid,
            transfertype:item.transferType,
            amount:item.amount,
            senderaddress:item.senderAddress,
            usdequivalent:item.usdequivalent,
            current_usd_rate:item.current_usd_rate,
  
        })
    })
    .then((res)=>{
        dispatch({
            type:SEND_COIN_SUCCESS,
            payload:res.data
        })

        // console.log(res.data)
        
      
    })
    .catch((err)=>{
        dispatch({
            type:SEND_COIN_ERROR,
            payload:err.response ? err.response.error : 'CONNECTION FAULT'
        })

        // console.log(err.response)
       
    })
}