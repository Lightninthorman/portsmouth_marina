import React from 'react';


function NavBar (props){

    function alert(){
        console.log("collapse thing clicked");
    }

    return(

        <nav className="nav-bar" >
            <img className="logo" src="/images/Piscataqua_Marina_logo_White.png" alt="Piscataqua_Marina_logo_White" onClick={alert}/>
            <div className="nav-list">
                <a className="nav-item"  href="#"><h5 className="nav-text">About</h5></a>
                <a className="nav-item" href="#1"><h5 className="nav-text">Rates</h5></a>
                <a className="nav-item" href="explore.html"><h5 className="nav-text">Explore</h5></a>
                <a className="nav-item" href="#"><h5 className="nav-text">Contact</h5></a>
            </div>
        </nav>

    )
}

export default NavBar;
