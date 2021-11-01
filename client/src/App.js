import { Route, Switch } from "react-router-dom";
import "./App.css"
import LogIn from "./pages/LogIn";
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <div><h1>Hello World</h1></div>
        </Route>
        <Route path='/login' component={LogIn}/>
      </Switch>
    </div>
  );
}

export default App;
