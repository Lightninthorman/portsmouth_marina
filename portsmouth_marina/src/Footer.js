import React from 'react';


function Footer (props){

    return(
        <footer className="container-fluid">
            <div className="footer-container">
                <div className="footer-content-box">
                    <address className="footer-content mx-4 my-3">
                        <h5>Piscataqua Marina</h5>
                        <p>4 Island Ave.</p>
                        <p>Kittery, ME 03904</p>
                        <p>43.085⁰N,  70.752⁰W</p>

                    </address>
                    <address className="footer-content mx-4 my-3">
                        <h5>Main Office</h5>
                        <p>14 Rice Ave.</p>
                        <p>Suite #1</p>
                        <p>Kittery, ME 03904</p>
                    </address>
                </div>
                <div className="footer-content-box">
                    <div className="footer-content mx-4 my-3">
                        <h5>Dockmaster</h5>
                        <a href="tel:+12074391661"><img src="images/phone.png" alt="phone" /> (207)-439-1661</a>
                        <p><a href="mailto:David@PiscataquaMarina.com"><img src="images/email.png" alt="email" /> David@PiscataquaMarina.com</a></p>
                        <p>VHF Ch 9 or 13</p>
                    </div>
                    <div className="footer-content mx-4 my-3">
                        <h5>Owner</h5>
                        <p><a href="mailto:Drew@PiscataquaMarina.com"><img src="images/email.png" alt="email" /> Drew@PiscataquaMarina.com</a></p>
                    </div>
                </div>
            </div>

            <div>
                a website built by <a href="https://thorkuivanen.com/">Thor Kuivanen</a> - icons from <a href="https://icons8.com/icons">icons8.com</a>
            </div>
        </footer>
    )
}

export default Footer;
