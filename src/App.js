import logo from './logo.svg';
import './assets/css/Home/loader.css';
import Routes from './route'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { GlobalProvider } from './context/Provider';

function App() {

  const [isLoading, setLoading] = useState(true);

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


const RenderRouter = (route)=>{
  
  document.title = route.title || 'Jupit App';
    if(route.isAuthenticated){
      console.log('token is required')
    }
  return <Route 
          path={route.path}
          exact
          render={(props)=><route.component {...props}/>}
        />
}

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
