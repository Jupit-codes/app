import {VALIDATE_ACCOUNT_ERROR,VALIDATE_ACCOUNT_LOADING,VALIDATE_ACCOUNT_SUCCESS} from '../../constants/actionTypes'

const validation = (state,{payload,type})=>{
    
    switch(type){
        
        case VALIDATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                validation:{
                    ...state.validation,
                    validation_error:null,
                    validation_data:payload,
                    validation_loading:false,
                 

                }
            }
        
            case VALIDATE_ACCOUNT_ERROR:
                return {
                    ...state,
                    validation:{
                        ...state.validation,
                        validation_error:payload,
                        validation_data:null,
                        validation_loading:false,
                      
                    }
            }
            case VALIDATE_ACCOUNT_LOADING:
                return{
                    ...state,
                    validation:{
                        ...state.validation,
                        validation_error: null,
                        validation_data:null,
                        validation_loading:true,
                       
                    }
            };
        
    
        default :
        return state;
    }

};

export default validation;