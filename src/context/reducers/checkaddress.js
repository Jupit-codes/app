import {CHECK_ADDRESS_ERROR,CHECK_ADDRESS_LOADING,CHECK_ADDRESS_SUCCESS} from '../../constants/actionTypes'

const checkaddress = (state,{payload,type})=>{
    
    switch(type){
        
        case CHECK_ADDRESS_SUCCESS:
            return {
                ...state,
                checkaddress:{
                    ...state.checkaddress,
                    error:null,
                    data:payload,
                    loading:false,
                    

                }
            }
        
            case CHECK_ADDRESS_ERROR:
                return {
                    ...state,
                    checkaddress:{
                        ...state.checkaddress,
                        error:payload,
                        data:null,
                        loading:false,
                        
                    }
            }
            case CHECK_ADDRESS_LOADING:
                return{
                    ...state,
                    checkaddress:{
                        ...state.checkaddress,
                        error: null,
                        data:null,
                        loading:true,
                        
                    }
            };
        
    
        default :
        return state;
    }

};

export default checkaddress;