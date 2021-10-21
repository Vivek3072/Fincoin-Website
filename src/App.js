import LandingPage from './components/LandingPage/LandingPage'
import Dashboard from './components/Dashboard/Dashboard'
import {Switch,Route} from "react-router-dom";

function App() {
  document.body.style.backgroundColor="#010C2A";
  return (
    <>
     <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route> 
         <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        
      </Switch>

    </>
  );
}

export default App;
