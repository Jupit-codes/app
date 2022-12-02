import axios from "axios"
import { PRICE_ERROR, PRICE_LOADING, PRICE_SUCCESS } from "../../constants/actionTypes"

export default ()=>(dispatch)=>{
    dispatch({
        type:PRICE_LOADING
    })

    //https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,USDT&tsyms=USD
    //Apikey fab6779bb25e937fa7ef922e132796d2c323635c431bc1f3185faf7b293633c5
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether,bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
    headers:{
        'Content-Type':'application/json',
        // 'Authorization':'Apikey fab6779bb25e937fa7ef922e132796d2c323635c431bc1f3185faf7b293633c5'
    }
})
.then(res=>{
    console.log(res.data)
    dispatch({
        type:PRICE_SUCCESS,
        payload:res.data
    })
})
.catch(err=>{
    dispatch({
        type:PRICE_ERROR,
        payload:err.response
    })
})

}