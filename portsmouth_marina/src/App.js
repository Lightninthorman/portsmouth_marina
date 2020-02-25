import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Explore from './Explore.js';
import Rates from './Rates.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {

  return (
    <Router>
        <div className="App">

          <Switch>
            <Route exact path="/">
                <Header headerName={"home"} />
                <Home />
            </Route>
            <Route exact path="/explore">
                <Header headerName={"explore"} />
                <Explore />
            </Route>
            <Route exact path="/rates">
                <Header headerName={"rates"} />
                <Rates />
            </Route>
            <Route exact path="/contact">
                <Header headerName={"contact"} />
                <Contact />
            </Route>
          </Switch>
          <Footer />

        </div>
    </Router>
  );
}

export default App;
