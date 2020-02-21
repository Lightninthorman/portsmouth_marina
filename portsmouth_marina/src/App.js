import React, {useState,useEffect} from 'react';
import Header from './Header.js'

function App() {
    var [header, setHeader] = useState("home-header");

    function handleScrollEvent (e){
        console.log("hey");
    }

    document.addEventListener("scroll", handleScrollEvent);

    useEffect(() => {
        console.log("re-render");
    });

  return (
    <div className="App">
      <Header headerName={header} />

    </div>
  );
}

export default App;
