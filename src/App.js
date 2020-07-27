import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import TimeLine from 'pages/TimeLine';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={TimeLine}></Route>
      </Router>
    </div>
  );
}

export default App;
