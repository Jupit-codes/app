import React, {Children, createContext,useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import registerInitialState from './initialStates/registerInitialState';
import initialMarketprice from './initialStates/initialMarketprice';
import initialcheckaddress from './initialStates/initialcheckaddress';
import autofeeinitial from './initialStates/autofeeinitial';
import auth from './reducers/auth';
import authRegister from './reducers/register'
import marketprice from './reducers/marketprice';
import checkaddress  from './reducers/checkaddress';
import autofee from './reducers/autofee'


export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [authState,authDispatch]= useReducer(auth,authInitialState);
    const [registerState,registerDispatch]= useReducer(authRegister,registerInitialState);
    const [priceState, priceDispatch] = useReducer(marketprice,initialMarketprice);
    const [checkaddressState, checkaddressDispatch] = useReducer(checkaddress,initialcheckaddress);
    const [autofeeState, autofeeDispatch] = useReducer(autofee,autofeeinitial);
    return <GlobalContext.Provider value={
        {
            authState,
            authDispatch, 
            registerState,
            registerDispatch,
            priceState,
            priceDispatch,
            checkaddressState,
            checkaddressDispatch,
            autofeeState,
            autofeeDispatch

        }
    }>
        {children}
    </GlobalContext.Provider>
}



