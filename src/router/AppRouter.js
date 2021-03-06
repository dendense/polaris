import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import VerificationPage from "pages/VerificationPage";
import HeaderParts from "parts/Header";
import TimelinePage from "pages/TimelinePage";
//VerificationPage Redirect to = PageSettings
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TimelinePage} />
        {/* <Route path="/verification-page" component={VerificationPage} /> */}
      </Router>
    </div>
  );
}

export default App;
