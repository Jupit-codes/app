import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_TEST} from '../../constants/actionTypes'

const auth = (state,{payload,type})=>{
    
    switch(type){
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    error:null,
                    data:payload,
                    loading:false,

                }
            }
        
            case LOGIN_ERROR:
                return {
                    ...state,
                    auth:{
                        ...state.auth,
                        error:payload,
                        data:null,
                        loading:false,
                        errorAlert:true
                    }
            }
            case LOGIN_LOADING:
                return{
                    ...state,
                    auth:{
                        ...state.auth,
                        error: null,
                        data:null,
                        loading:true,
                        errorAlert:false
                    }
            };
        
    
        default :
        return state;
    }

};

export default auth;