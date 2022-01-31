import {REGISTER_ERROR,REGISTER_SUCCESS,REGISTER_LOADING,EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED} from '../../constants/actionTypes'

const registerAuth = (state,{payload,type})=>{
    
    switch(type){
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerAuth:{
                    ...state.registerAuth,
                    error:null,
                    data:payload,
                    loading:false,
                    errorAlert:false

                }
            }
        
            case REGISTER_ERROR:
                return {
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error:payload,
                        data:null,
                        loading:false,
                        errorAlert:true
                    }
            }
            case REGISTER_LOADING:
                return{
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error: null,
                        data:null,
                        loading:true,
                        errorAlert:false
                    }
            };
            case EMAIL_VALIDATE:
                return{
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error: payload,
                        data:null,
                        loading:null,
                        errorAlert:false,
                        email_error:true
                    }
            };
            case EMAIL_VALIDATE_CHECKED:
                return{
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error: payload,
                        data:null,
                        loading:null,
                        errorAlert:false,
                        email_error:false
                    }
            };
        
    
        default :
        return state;
    }

};

export default registerAuth;