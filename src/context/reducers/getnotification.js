import {GET_NOTIFICATION_ERROR,GET_NOTIFICATION_SUCCESS,GET_NOTIFICATION_LOADING} from '../../constants/actionTypes'


const getNotification = (state,{payload,type})=>{
    
    switch(type){
        
        case GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                getnotification:{
                    ...state.getnotification,
                    errorerrorNotification:null,
                    dataerrorNotification:payload,
                    loadingerrorNotification:false,
                    

                }
            }
        
            case GET_NOTIFICATION_ERROR:
                return {
                    ...state,
                    getnotification:{
                        ...state.getnotification,
                        errorerrorNotification:null,
                        dataerrorNotification:payload,
                        loadingerrorNotification:false,
                    }
                   
            }
            case GET_NOTIFICATION_LOADING:
                return{
                    ...state,
                    getnotification:{
                        ...state.getnotification,
                        errorerrorNotification:null,
                        dataerrorNotification:null,
                        loadingerrorNotification:true,
                        
    
                    }
            };
        
    
        default :
        return state;
    }

};

export default getNotification;