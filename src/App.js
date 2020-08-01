import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import TestBlank from "pages/TestBlank";
import PageDeny from "pages/PageDeny";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={PageDeny}></Route>
      </Router>
    </div>
  );
}

export default App;
