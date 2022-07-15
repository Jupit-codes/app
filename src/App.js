import logo from './logo.svg';
import './assets/css/Home/loader.css';

import Routes from './route'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { GlobalProvider } from './context/Provider';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast,ToastContainer } from 'react-toastify';
import SweetAlert2 from 'react-sweetalert2';
import { usePWAInstall } from 'react-use-pwa-install'
import Alas from './utils/modal/pwa'
import Spinner from './utils/loader/spinner.js'
function App() {

  const [isLoading, setLoading] = useState(true);
  const [modal,setmodal] = useState(true);
  const history = useHistory();
  const install = usePWAInstall()
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      // const el = document.querySelector(".loader-container");
      const el = document.querySelector(".loader-container")
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
  function getPayload(jwt){
    // A JWT has 3 parts separated by '.'
    // The middle part is a base64 encoded JSON
    // decode the base64 
    console.log('jwt',jwt)
    return atob(jwt.split(".")[1])
  }

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const promptPWA = async ()=>{
    // let deferredPrompt;

    // window.addEventListener('beforeinstallprompt', (e) => {
    //     deferredPrompt = e;
    //     console.log("Env",e)
    // });
    
  //   if (deferredPrompt !== null) {
  //     deferredPrompt.prompt();
  //     const { outcome } = await deferredPrompt.userChoice;
  //     if (outcome === 'accepted') {
  //         deferredPrompt = null;
  //     }
  // }
  }

const RenderRouter = (route)=>{
  
 

  document.title = route.title || 'Jupit App';
  const  swal= {
                            show: true,
                            title: 'Basic Usage',
                            text: 'Hello World'
  }
    if(route.isAuthenticated){
      if(reactLocalStorage.get('token') && reactLocalStorage.get('user') ){
        // alert('yes')

        const decodedJwt = parseJwt(reactLocalStorage.get('token'));

        const expiration = new Date(decodedJwt.exp * 1000);
        const now = new Date();
        const fiveMinutes = 1000 * 60 * 5;
        console.log(expiration)
        if( expiration.getTime() - now.getTime() < fiveMinutes ){
            console.log('Expired');
          
            reactLocalStorage.clear();
            window.location='/client/signin';
            
        }
        else{
          console.log(expiration.getTime())
          console.log(expiration.getTime() - now.getTime())
          console.log(fiveMinutes);

            return <Route 
              path={route.path}
              exact={true}
              render={(props)=><route.component {...props}/>}
          />
        }


        // if (decodedJwt.exp * 1000 < Date.now()) {
        
        //  console.log(new Date(decodedJwt.exp * 1000))
        //  console.log('Expired',decodedJwt)
        // }
        // else{
            
          
        //     return <Route 
        //       path={route.path}
        //       exact={true}
        //       render={(props)=><route.component {...props}/>}
        //     />
        // }
      
        
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



  return (
    <div className="App">
       {install && modal && <Alas closePWA={setmodal} installLib={install} />}
      <ToastContainer/>
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
