import {PRICE_ERROR,PRICE_LOADING,PRICE_SUCCESS} from '../../constants/actionTypes'


const marketprice = (state,{payload,type})=>{
    
    switch(type){
        
        case PRICE_SUCCESS:
            return {
                ...state,
                price:{
                    ...state.price,
                    error:null,
                    data:payload,
                    loading:false,
                    

                }
            }
        
            case PRICE_ERROR:
                return {
                    ...state,
                    price:{
                        ...state.price,
                        error:payload,
                        data:null,
                        loading:false,
                        
                    }
            }
            case PRICE_LOADING:
                return{
                    ...state,
                    price:{
                        ...state.price,
                        error: null,
                        data:null,
                        loading:true,
                        
                    }
            };
        
    
        default :
        return state;
    }

};

export default marketprice;