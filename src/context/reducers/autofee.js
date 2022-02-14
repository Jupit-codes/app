import {AUTO_FEE_ERROR,AUTO_FEE_LOADING,AUTO_FEE_SUCCESS} from '../../constants/actionTypes'

const autofee = (state,{payload,type})=>{
    
    switch(type){
        
        case AUTO_FEE_SUCCESS:
            return {
                ...state,
                autofee:{
                    ...state.autofee,
                    errorAutofee:null,
                    dataAutofee:payload,
                    loadingAutofee:false,
                    

                }
            }
        
            case AUTO_FEE_ERROR:
                return {
                    ...state,
                    autofee:{
                        ...state.autofee,
                        errorAutofee:payload,
                        dataAutofee:null,
                        loadingAutofee:false,
                        
                    }
            }
            case AUTO_FEE_LOADING:
                return{
                    ...state,
                    autofee:{
                        ...state.autofee,
                        errorAutofee: null,
                        dataAutofee:null,
                        loadingAutofee:true,
                        
                    }
            };
        
    
        default :
        return state;
    }

};

export default autofee;