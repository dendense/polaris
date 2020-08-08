import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import TestBlank from "pages/TestBlank";
import VerificationPage from "pages/VerificationPage";
import LoginTabs from "parts/LoginTabs";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/verification-page" component={VerificationPage} />
      </Router>
    </div>
  );
}

export default App;
