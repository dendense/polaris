import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import VerificationPage from "pages/VerificationPage";
import HeaderParts from "parts/Header";
import TimelinePage from "pages/TimelinePage";
import AnggaComponent from "pages/Angga";
import TestPage from "pages/Angga/Test";
//VerificationPage Redirect to = PageSettings
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={AnggaComponent} />
        <Route path="/test" component={TestPage} />

        {/* <Route path="/verification-page" component={VerificationPage} /> */}
      </Router>
    </div>
  );
}

export default App;
