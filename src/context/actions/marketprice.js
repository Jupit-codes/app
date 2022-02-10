import axios from "axios"
import { PRICE_ERROR, PRICE_LOADING, PRICE_SUCCESS } from "../../constants/actionTypes"

export default ()=>(dispatch)=>{
    dispatch({
        type:PRICE_LOADING
    })
axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,USDT&tsyms=USD',{
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Apikey 475906935b55657e131801270facf7cd73a797ee9cff36bbb24185f751c18d63'
    }
})
.then(res=>{
    dispatch({
        type:PRICE_SUCCESS,
        payload:res.data.DISPLAY
    })
})
.catch(err=>{
    dispatch({
        type:PRICE_ERROR,
        payload:err.response
    })
})

}