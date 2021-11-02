import { Route, Switch } from "react-router-dom";
import "./App.css"
import {useState} from 'react';
import LogIn from "./pages/LogIn";
import NavigationBar from './components/NavigationBar'
import Landing from "./pages/Landing/index"
import CreateRecipe from "./pages/CreateRecipe/index"
import SignUp from "./pages/SignUp";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div style={{backgroundColor: 'white'}}>
      <NavigationBar userData={userData}/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create" component={CreateRecipe} />
        <Route path='/login'>
          <LogIn onLoginSuccess={(userInfo) => setUserData(userInfo)}/>
        </Route>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </div>
  )
}

export default App;
