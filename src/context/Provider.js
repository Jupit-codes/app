import React, {Children, createContext,useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import registerInitialState from './initialStates/registerInitialState';
import auth from './reducers/auth';
import authRegister from './reducers/register'

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [authState,authDispatch]= useReducer(auth,authInitialState);
    const [registerState,registerDispatch]= useReducer(authRegister,registerInitialState);

    return <GlobalContext.Provider value={
        {
            authState,
            authDispatch, 
            registerState,
            registerDispatch
        }
    }>
        {children}
    </GlobalContext.Provider>
}



