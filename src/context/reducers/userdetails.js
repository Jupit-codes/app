import {USER_DETAILS_ERROR,USER_DETAILS_LOADING,USER_DETAILS_SUCCESS} from '../../constants/actionTypes'

const userdetails = (state,{payload,type})=>{
    
    switch(type){
        
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                userdetails:{
                    ...state.userdetails,
                    error:null,
                    data:payload,
                    loading:false,
                 

                }
            }
        
            case USER_DETAILS_ERROR:
                return {
                    ...state,
                    userdetails:{
                        ...state.userdetails,
                        error:payload,
                        data:null,
                        loading:false,
                      
                    }
            }
            case USER_DETAILS_LOADING:
                return{
                    ...state,
                    userdetails:{
                        ...state.userdetails,
                        error: null,
                        data:null,
                        loading:true,
                       
                    }
            };
        
    
        default :
        return state;
    }

};

export default userdetails;