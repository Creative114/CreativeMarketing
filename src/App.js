import React from "react";
import Home from "./components/screens/Home/Home";
import Work from "./components/screens/Work/Work";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return <Home onEnter={window.scrollTo(0, 0)} />;
        }}
      />
      <Route
        exact
        path="/work"
        render={() => {
          return <Work onEnter={window.scrollTo(0, 0)} />;
        }}
      />
    </div>
  </Router>
);

export default App;
