import logo from './logo.svg';
// import './assets/css/App.css';
import Routes from './route'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
const RenderRouter = (route)=>{
  document.title = route.title || 'Jupit App';
  return <Route 
          path={route.path}
          exact
          render={(props)=><route.component {...props}/>}
        />
}

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            {Routes.map((myroutes,index)=>{
               return (<RenderRouter  {...myroutes} key={index}/>)
            })}
          </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
