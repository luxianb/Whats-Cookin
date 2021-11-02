import { Route, Switch } from "react-router-dom";
import "./App.css"
import LogIn from "./pages/LogIn";
import NavigationBar from './components/NavigationBar'
import Landing from "./pages/Landing/index"
import CreateRecipe from "./pages/CreateRecipe/index"

function App() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create" component={CreateRecipe} />
        <Route path='/login' component={LogIn}/>
      </Switch>
    </div>
  )
}

export default App;
