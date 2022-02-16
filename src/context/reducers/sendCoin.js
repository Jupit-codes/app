import {SEND_COIN_ERROR,SEND_COIN_LOADING,SEND_COIN_SUCCESS} from '../../constants/actionTypes'

const sendCoin = (state,{payload,type})=>{
    
    switch(type){
        
        case SEND_COIN_SUCCESS:
            return {
                ...state,
                sendcoin:{
                    ...state.sendcoin,
                    SEND_COIN_error:null,
                    SEND_COIN_data:payload,
                    SEND_COIN_loading:false,
                 

                }
            }
        
            case SEND_COIN_ERROR:
                return {
                    ...state,
                    sendcoin:{
                        ...state.sendcoin,
                        SEND_COIN_error:payload,
                        SEND_COIN_data:null,
                        SEND_COIN_loading:false,
                      
                    }
            }
            case SEND_COIN_LOADING:
                return{
                    ...state,
                    sendcoin:{
                        ...state.sendcoin,
                        SEND_COIN_error: null,
                        SEND_COIN_data:null,
                        SEND_COIN_loading:true,
                       
                    }
            };
        
    
        default :
        return state;
    }

};

export default sendCoin;