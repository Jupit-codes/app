import React, {Children, createContext,useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import registerInitialState from './initialStates/registerInitialState';
import initialMarketprice from './initialStates/initialMarketprice';
import initialcheckaddress from './initialStates/initialcheckaddress';
import autofeeinitial from './initialStates/autofeeinitial';
import userdetailsinitial from './initialStates/userdetailsinitial';
import sendcoininitial from './initialStates/sendcoininitialstate'
import auth from './reducers/auth';
import authRegister from './reducers/register.js'
import marketprice from './reducers/marketprice.js';
import checkaddress  from './reducers/checkaddress.js';
import autofee from './reducers/autofee.js'
import userdetails from './reducers/userdetails.js'
import sendcoin from './reducers/sendcoin.js'


export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [authState,authDispatch]= useReducer(auth,authInitialState);
    const [registerState,registerDispatch]= useReducer(authRegister,registerInitialState);
    const [priceState, priceDispatch] = useReducer(marketprice,initialMarketprice);
    const [checkaddressState, checkaddressDispatch] = useReducer(checkaddress,initialcheckaddress);
    const [autofeeState, autofeeDispatch] = useReducer(autofee,autofeeinitial);
    const [userdetailsState, userdetailsDispatch] = useReducer(userdetails,userdetailsinitial);
    const [sendcoinState, sendcoinDispatch] = useReducer(sendcoin,sendcoininitial);
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
            autofeeDispatch,
            userdetailsState,
            userdetailsDispatch,
            sendcoinState,
            sendcoinDispatch

        }
    }>
        {children}
    </GlobalContext.Provider>
}



