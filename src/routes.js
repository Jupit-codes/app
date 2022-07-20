import { useEffect, useState } from 'react';
import { Navigate, Outlet, useRoutes,Routes,Route,useNavigate } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

import Login from './container/Login'
import Register from './container/Register'
import DashboardLayout from './container/Dashboard'
import Body from './container/Body'
import Test from './container/test'

export default function Router() {

  const navigate = useNavigate();
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
 
  const ProtectedRoute = () => {

    if (reactLocalStorage.get('token') && reactLocalStorage.get('user')) {

        const decodedJwt = parseJwt(reactLocalStorage.get('token'));
        const expiration = new Date(decodedJwt.exp * 1000);
        const now = new Date();
        const fiveMinutes = 1000 * 60 * 5;

        if( expiration.getTime() - now.getTime() < fiveMinutes ){

            reactLocalStorage.clear();
            navigate('/client/signin',{replace:true})
            
        }
        else{
            return <Outlet/>;
        }
        
    }
    else{
            reactLocalStorage.clear();
            navigate('/client/signin',{replace:true})
    }
    
    
    
  };


  return <Routes>
        
        <Route path="/client/signin" element={<Login />} />
        <Route path="client/signup" element={<Register/>} />
        <Route path="client/test" element={<Test/>} />
          <Route path="client" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="app" element={<Body/>} />
           
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
}
