import axios from "axios"
import {SEND_COIN_ERROR,SEND_COIN_LOADING,SEND_COIN_SUCCESS } from "../../constants/actionTypes"
import { reactLocalStorage } from "reactjs-localstorage"

export default (item)=>(dispatch)=>{
   
    dispatch({
        type:SEND_COIN_LOADING,
       
    })

    return false;
    const Base_url = process.env.REACT_APP_BACKEND_URL;

    axios({
        method: "POST",
        url: `${Base_url}/threshold/transfer/coin`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({
            ReceipentAddress:item.ReceipentAddress,
            block_average:item.block_average,
            networkFee:item.networkFee,
            wallet_type:item.wallet_type,
            userid:item.userid,
            transferType:item.transferType,
            amount:item.amount
        })
    })
    .then((res)=>{
        dispatch({
            type:SEND_COIN_SUCCESS,
            payload:res.data
        })
        
      
    })
    .catch((err)=>{
        dispatch({
            type:SEND_COIN_ERROR,
            payload:err.response
        })
       
    })
}