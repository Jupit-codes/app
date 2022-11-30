import axios from "axios"
import { PRICE_ERROR, PRICE_LOADING, PRICE_SUCCESS } from "../../constants/actionTypes"

export default ()=>(dispatch)=>{
    dispatch({
        type:PRICE_LOADING
    })
axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,USDT&tsyms=USD',{
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Apikey fab6779bb25e937fa7ef922e132796d2c323635c431bc1f3185faf7b293633c5'
    }
})
.then(res=>{
    dispatch({
        type:PRICE_SUCCESS,
        payload:res.data.RAW
    })
})
.catch(err=>{
    dispatch({
        type:PRICE_ERROR,
        payload:err.response
    })
})

}