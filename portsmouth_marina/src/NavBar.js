import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";


function NavBar (props){

    const [show, setShow] = useState(false);
    const [imgClass,setImgClass] = useState("logo-hide");
    const [navBarClass, setNavBarClass] = useState("nav-bar-background-hide");
    const [navText, setNavText] = useState("nav-text-large");


    function handleClose () {setShow(false)};
    function handleShow () {setShow(true)};

    function handleScrollEvent (){
        if(window.scrollY >= 90){
            setImgClass("logo-show");
            setNavBarClass("nav-bar-background-show");
            setNavText("nav-text-small");
        }else{
            setImgClass("logo-hide");
            setNavBarClass("nav-bar-background-hide");
            setNavText("nav-text-large");
        }
    }

    // function handleScreenSize (){
    //     if(window.innerWidth <= 1000){
    //         console.log("Small!");
    //     }else{
    //         console.log("Big");
    //     }
    // }
    //
    // useEffect(handleScreenSize,[])


    document.addEventListener("scroll", handleScrollEvent);
    // window.addEventListener("resize", handleScreenSize);

    return(

        <nav className={navBarClass + " nav-bar"} >
            <Link to="/"><img className={imgClass + " logo"} src="/images/Piscataqua_Marina_logo_White.png" alt="Piscataqua_Marina_logo_White"/></Link>
            <div className="nav-list">
                <Link to="/" className="nav-item"><h5 className={navText + " nav-text"}>Home</h5></Link>
                <Link className="nav-item" to="/rates"><h5 className={navText + " nav-text"}>Rates</h5></Link>
                <Link className="nav-item" to="/explore" ><h5 className={navText + " nav-text"}>Explore</h5></Link>
                <Link className="nav-item" to="/contact"><h5 className={navText + " nav-text"}>Contact</h5></Link>
            </div>
            <div className="nav-hamburger">
                <img src="images/hamburger_icon_1.png" alt="humburger_menu_icon" onClick={handleShow}/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Piscataqua Marina</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to="/" onClick={handleClose} className="modal-body-link"><h5>Home</h5></Link>
                    <Link to="/rates" onClick={handleClose} className="modal-body-link"><h5>Rates</h5></Link>
                    <Link to="/explore" onClick={handleClose} className="modal-body-link"><h5>Explore</h5></Link>
                    <Link to="/contact" onClick={handleClose} className="modal-body-link"><h5>Contact</h5></Link>
                </Modal.Body>
                <Modal.Footer>
                  <button variant="secondary" onClick={handleClose}>
                    Close
                  </button>
                </Modal.Footer>
          </Modal>
        </nav>

    )
}

export default NavBar;
