import React from 'react';
import NavBar from './NavBar.js'

function Header (props){

    function alert(){
        console.log("collapse thing clicked");
    }

    return(
        <header className={props.headerName + " shared-header-settings"}>
            <NavBar />

        </header>
    )
}

export default Header;
