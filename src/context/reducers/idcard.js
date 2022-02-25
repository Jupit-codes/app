import {ID_CARD_ERROR,ID_CARD_LOADING,ID_CARD_SUCCESS} from '../../constants/actionTypes'

const idcard = (state,{payload,type})=>{
    
    switch(type){
        
        case ID_CARD_SUCCESS:
            return {
                ...state,
                idcardVerification:{
                    ...state.idcardVerification,
                    idcard_error:null,
                    idcard_data:payload,
                    idcard_loading:false,
                 

                }
            }
        
            case ID_CARD_ERROR:
                return {
                    ...state,
                    idcardVerification:{
                        ...state.idcardVerification,
                        idcard_error:payload,
                        idcard_data:null,
                        idcard_loading:false,
                      
                    }
            }
            case ID_CARD_LOADING:
                return{
                    ...state,
                    idcardVerification:{
                        ...state.idcardVerification,
                        idcard_data: null,
                        idcard_error:null,
                        idcard_loading:true,
                       
                    }
            };
        
    
        default :
        return state;
    }

};

export default idcard;