import { Route, Switch } from "react-router-dom";
import "./App.css"
import {useState, useEffect} from 'react';
import axios from "axios";
import LogIn from "./pages/LogIn";
import NavigationBar from './components/NavigationBar'
import Landing from "./pages/Landing/index"
import CreateRecipe from "./pages/CreateRecipe/index"
import SignUp from "./pages/SignUp";
import DisplayMeals from "./pages/DisplayMeals";
import DisplayBreakfast from "./pages/DisplayMeals/BreakfastAll";
import DisplayLunch from "./pages/DisplayMeals/LunchAll";

function App() {
  const [userData, setUserData] = useState({});
  const [card, setCard] = useState();

  useEffect(() => {
    async function fetchRecipeData() {
      const res = await axios.get("/api/recipes");
      setCard(res.data);
    }
    fetchRecipeData();
  }, []);

  return (
    <div style={{backgroundColor: 'white'}}>
      <NavigationBar userData={userData}/>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/meals" component={DisplayMeals}>
          <DisplayMeals recipes={card}/>
        </Route>

        <Route exact path="/meals/breakfast" component={DisplayBreakfast}>
        <DisplayBreakfast recipes={card}/>
        </Route>

        <Route exact path="/meals/lunch" component={DisplayLunch}>
        <DisplayLunch recipes={card}/>
        </Route>

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
