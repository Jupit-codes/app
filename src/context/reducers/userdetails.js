import {USER_DETAILS_ERROR,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS} from '../../constants/actionTypes'

const userdetails = (state,{payload,type})=>{
    
    switch(type){
        
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                userdetails:{
                    ...state.userdetails,
                    USER_error:null,
                    USER_data:payload,
                    USER_loading:false,
                 

                }
            }
        
            case USER_DETAILS_ERROR:
                return {
                    ...state,
                    userdetails:{
                        ...state.userdetails,
                        USER_error:payload,
                        USER_data:null,
                        USER_loading:false,
                      
                    }
            }
            case USER_DETAILS_LOADING:
                return{
                    ...state,
                    userdetails:{
                        ...state.userdetails,
                        USER_error: null,
                        USER_data:null,
                        USER_loading:true,
                       
                    }
            };
        
    
        default :
        return state;
    }

};

export default userdetails;