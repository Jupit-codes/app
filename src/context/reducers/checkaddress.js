import {CHECK_ADDRESS_ERROR,CHECK_ADDRESS_LOADING,CHECK_ADDRESS_SUCCESS} from '../../constants/actionTypes'

const checkaddress = (state,{payload,type})=>{
    
    switch(type){
        
        case CHECK_ADDRESS_SUCCESS:
            return {
                ...state,
                checkaddress:{
                    ...state.checkaddress,
                    error:null,
                    dataAddr:payload,
                    loading:false,
                    

                }
            }
        
            case CHECK_ADDRESS_ERROR:
                return {
                    ...state,
                    checkaddress:{
                        ...state.checkaddress,
                        error:payload,
                        dataAddr:null,
                        loading:false,
                        
                    }
            }
            case CHECK_ADDRESS_LOADING:
                return{
                    ...state,
                    checkaddress:{
                        ...state.checkaddress,
                        error: null,
                        dataAddr:null,
                        loading:true,
                        
                    }
            };
        
    
        default :
        return state;
    }

};

export default checkaddress;