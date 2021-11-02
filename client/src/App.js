import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/index"
import CreateRecipe from "./pages/CreateRecipe/index"

import NavigationBar from "../src/components/NavigationBar/index"




function App() {

  return (
    <Router>
       <NavigationBar />
     <div>
       <Switch>
         <Route exact path="/">
          <Landing />
         </Route>
         <Route exact path="/create">
           <CreateRecipe />
         </Route>

       </Switch>
     </div>
    </Router>
  );
}

export default App;
