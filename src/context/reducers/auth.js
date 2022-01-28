import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS} from '../../constants/actionTypes'

const auth = (state,{payload,type})=>{
    switch(type){
        case LOGIN_LOADING:
            return {
                ...state,
                auth:{
                    ...state.auth,
                    data:null,
                    loading:true

                }
                
            }
    }
}

export default auth;