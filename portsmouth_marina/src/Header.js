import React from 'react';
import NavBar from './NavBar.js'


function Header (props){

    function headerTitle(){
        if(props.headerName === 'home'){
            return(
                <h1 className="header-text-placement"><span>Piscataqua</span> Marina</h1>
            )
        }else{
            return(
                <h1 className="header-text-placement">{props.headerName}</h1>
            )
        }
    }

    return(
        <header className={props.headerName + "-header shared-header-settings"}>
            <NavBar />
            <img src='/images/Piscataqua_Marina_logo_no_words.png' className="header-logo-placement"/>
            {headerTitle()}
        </header>
    )
}

export default Header;
