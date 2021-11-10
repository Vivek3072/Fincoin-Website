import LandingPage from './components/LandingPage/LandingPage'
import {Switch,Route} from "react-router-dom";
import DashboardItem from './components/Dashboard/DashboardItem'
import DashProfile from './components/Dashboard/DashProfile'
import DashWallet from './components/Dashboard/DashWallet'
import DashCoins from './components/Dashboard/DashCoins'
import './components/Dashboard/dashboard.css'
 
function App() {
  document.body.style.backgroundColor="#010C2A";
  return (
    <>
     <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route> 
        
                     <Route exact path="/DashboardItem">
                         <DashboardItem />
                     </Route>
                     <Route exact path="/DashProfile">
                         <DashProfile />
                     </Route>
                     <Route exact path="/DashWallet">
                         <DashWallet />
                     </Route>
                     <Route exact path="/DashCoins">
                         <DashCoins />
                     </Route>
      </Switch>

    </>
  );
}

export default App;
