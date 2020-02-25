import React, {useEffect} from 'react';


function Contact (props){

    useEffect(() => {
        console.log("re-render");
        window.scrollTo(0,0);
    });

    return(
        <main className="container contact-main">

        <div className="row justify-content-center">
            <div className="explore-item contact-container col-md-4 ">
                <h5>David - Docmaster</h5>
                <a href="tel:207-439-1661"><img src="images/phone.png" alt="phone" /> (207)-439-1661</a>
                <a href="mailto:David@PiscataquaMarina.com"><img src="images/email.png" alt="email" /> David@PiscataquaMarina.com</a>
                <br />
                <p>VHF Ch 9 or 13</p>
            </div>
            <div className="explore-item contact-container col-md-4">
                <h5>Drew - Owner</h5>
                <a href="mailto:Drew@PiscataquaMarina.com"><img src="images/email.png" alt="email" /> Drew@PiscataquaMarina.com</a>
                <p>VHF Ch 9 or 13</p>
            </div>
        </div>
        <div className="row contact-location explore-item justify-content-center">
            <address className="col-sm-4">
                <h5>Piscataqua Marina</h5>
                <p>4 Island Ave.</p>
                <p>Kittery, ME 03904</p>
                <p>43.085⁰N,  70.752⁰W</p>
            </address>
            <address className="col-sm-4 d-flex flex-column align-items-start align-content-center">
                <h5>Main Office</h5>
                <p>14 Rice Ave.</p>
                <p>Suite #1</p>
                <p>Kittery, ME 03904</p>
            </address>
        </div>
        </main>
    )
}

export default Contact;
