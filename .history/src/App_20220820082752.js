import React, { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
