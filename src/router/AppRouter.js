import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import VerificationPage from "pages/VerificationPage";
import TimelinePage from "pages/TimelinePage";
import DenyComponent from "pages/DenyComponent";

//VerificationPage Redirect to = PageSettings
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/verification-page" component={VerificationPage} />
        <Route path="/timeline" component={TimelinePage} />
        <Route path="/test-page" component={DenyComponent} />
      </Router>
    </div>
  );
}

export default App;
