import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Explore from './Explore.js';
import Footer from './Footer.js';

function App() {

    useEffect(() => {
        console.log("re-render");
        window.scrollTo(0,0);
    });

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
          </Switch>
          <Footer />

        </div>
    </Router>
  );
}

export default App;
