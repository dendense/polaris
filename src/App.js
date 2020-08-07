import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import TestBlank from "pages/TestBlank";
import VerificationPage from "pages/VerificationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={VerificationPage}></Route>
      </Router>
    </div>
  );
}

export default App;
