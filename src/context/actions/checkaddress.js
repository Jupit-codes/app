import axios from "axios"
import { CHECK_ADDRESS_ERROR, CHECK_ADDRESS_LOADING, CHECK_ADDRESS_SUCCESS } from "../../constants/actionTypes"

export default ()=>(dispatch)=>{
    dispatch({
        type:CHECK_ADDRESS_LOADING
    })
axios.post('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,USDT&tsyms=USD',{
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Apikey 475906935b55657e131801270facf7cd73a797ee9cff36bbb24185f751c18d63'
    }
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
        payload:err.response
    })
})

}