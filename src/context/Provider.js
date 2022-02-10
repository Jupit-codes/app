import React, {Children, createContext,useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import registerInitialState from './initialStates/registerInitialState';
import initialMarketprice from './initialStates/initialMarketprice';
import auth from './reducers/auth';
import authRegister from './reducers/register'
import marketprice from './reducers/marketprice';


export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [authState,authDispatch]= useReducer(auth,authInitialState);
    const [registerState,registerDispatch]= useReducer(authRegister,registerInitialState);
    const [priceState, priceDispatch] = useReducer(marketprice,initialMarketprice);

    return <GlobalContext.Provider value={
        {
            authState,
            authDispatch, 
            registerState,
            registerDispatch,
            priceState,
            priceDispatch
        }
    }>
        {children}
    </GlobalContext.Provider>
}



