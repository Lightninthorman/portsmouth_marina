import React, {useState,useEffect} from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';

function App() {
    var [header, setHeader] = useState("home-header");




    useEffect(() => {
        console.log("re-render");
        window.scrollTo(0,0);
    });

  return (
    <div className="App">
      <Header headerName={header} />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
