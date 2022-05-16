import logo from './logo.svg';
import './assets/css/Home/loader.css';

import Routes from './route'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { GlobalProvider } from './context/Provider';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function App() {

  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  const  isToken = ()=>{
   let check = reactLocalStorage.get('token');

   if(check && check.length > 0){
     console.log('token present')
     return true
   }
   else{
    console.log('token absent')
     return false
   }
  }


const RenderRouter = (route)=>{
  
  document.title = route.title || 'Jupit App';
 
    if(route.isAuthenticated){
      if(reactLocalStorage.get('token')){
        
        return <Route 
          path={route.path}
          exact={true}
          render={(props)=><route.component {...props}/>}
        />
      }
      else{
        // console.log('Not Authenticated',reactLocalStorage.get('token'));
        window.location='/client/signin';
      }
      
    }
    else{
     
        return <Route 
        path={route.path}
        exact
        render={(props)=><route.component {...props}/>}
      />
    }
  
}

const payload = () =>{
  let token = reactLocalStorage.get('token')
  return atob(token.split(".")[1])
}

console.log(payload);



  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
        
            <Switch>
              {Routes.map((myroutes,index)=>{
                return (<RenderRouter  {...myroutes} key={index}/>)
              })}
            </Switch>

        </BrowserRouter>

      </GlobalProvider>
        
    </div>
  );
}

export default App;
