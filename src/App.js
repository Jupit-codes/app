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

function getPayload(jwt){
  // A JWT has 3 parts separated by '.'
  // The middle part is a base64 encoded JSON
  // decode the base64 
  console.log('jwt',jwt)
  return atob(jwt.split(".")[1])
}

const payload = getPayload(reactLocalStorage.get('token'));
console.log('xtra',payload.exp)
const expiration = new Date(payload.exp);
const now = new Date();
const fiveMinutes = 1000 * 60 * 5;
console.log(expiration);
console.log(now)
if( expiration.getTime() - now.getTime() < fiveMinutes ){
  console.log("JWT has expired or will expire soon");
} else {
  console.log("JWT is valid for more than 5 minutes", payload);
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
