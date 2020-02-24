import React from 'react';
import NavBar from './NavBar.js'

function Header (props){

    function alert(){
        console.log("collapse thing clicked");
    }

    return(
        <header className={props.headerName + " shared-header-settings"}>
            <NavBar />
            <img src='/images/Piscataqua_Marina_logo_White.png' className="header-logo-placement"/>
            <h1 className="header-text-placement">Piscataqua Marina</h1>
        </header>
    )
}

export default Header;
