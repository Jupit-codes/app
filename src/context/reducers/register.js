import {REGISTER_ERROR,REGISTER_SUCCESS,REGISTER_LOADING,EMAIL_VALIDATE,EMAIL_VALIDATE_CHECKED,PHONE_NUMBER_VALIDATION,PASSWORD_STRENGTH} from '../../constants/actionTypes'

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
                        errorAlert:false,
                        phonenumber_error:null
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

            case PHONE_NUMBER_VALIDATION:
                return{
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error: '',
                        data:null,
                        loading:null,
                        errorAlert:false,
                        email_error:false,
                        phonenumber_error:payload
                    }
            };
        
            case PASSWORD_STRENGTH:
                return{
                    ...state,
                    registerAuth:{
                        ...state.registerAuth,
                        error: '',
                        data:null,
                        loading:null,
                        errorAlert:false,
                        email_error:false,
                        password_strength:payload
                    }
            };
    
        default :
        return state;
    }

};

export default registerAuth;