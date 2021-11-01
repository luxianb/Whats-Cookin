import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/index"

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

       </Switch>
     </div>
    </Router>
  );
}

export default App;
