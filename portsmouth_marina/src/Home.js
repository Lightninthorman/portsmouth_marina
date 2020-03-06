import React, {useEffect} from 'react';
import {Link} from "react-router-dom";


function Home (props){

    useEffect(() => {

        window.scrollTo(0,0);
    });

    return(
        <>
        <main className="container-fluid">
            <div className="row d-flex flex-row justify-content-center align-items-baseline my-5">
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <Link to="/rates" className="link-icon"><img  src="images/Piscataqua_Marina_Rates_Icon.png" alt="Piscataqua Marina Dockage Rates"/></Link>
                    <h4>Reserve a Slip</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center  mx-5">
                    <a className="link-icon" href="#weather"><img src="images/Piscataqua_Marina_Weather_Icon.png" alt="Piscataqua Marina Weather Conditions"/></a>
                    <h4>Weather Conditions</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <Link className="link-icon" to="/explore"><img src="images/Piscataqua_Marina_Explore_Icon.png" alt="Piscataqua Marina Explore"/></Link>
                    <h4>Explore</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <Link className="link-icon" to="/contact"><img src="images/Piscataqua_Marina_Contact_Icon.png" alt="Piscataqua Marina Contact"/></Link>
                    <h4>Contact</h4>
                </div>
            </div>


            <div className="row d-flex flex-row-reverse mt-5 dark">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                    <img id="badger-island-view" className="home-item-image m-2 rounded" src="/images/piscataqua_marina_aerial_with_badgers_island.jpg" alt="Piscataqua_Marina_Aerial_View_with_Badgers_Island" />

                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Piscataqua Marina</h2>
                    <p>Welcome to Piscataqua Marina, formerly known as Badgers Island Marina East.  We are located about 2 Nm from the mouth of the Piscataqua River at the base of the Memorial Bridge between Badgers’ Island in Maine and Portsmouth, NH.  Our marina offers slips ranging from 32-125’ for summer, winter and transient occupancy.
                    </p>
                </div>
            </div>
            <div className="row light ">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                        <img className="home-item-image m-3 rounded" src="images/piscataqua_marina_ameneties.jpg" alt="Piscataqua_Marina_Ameneties"/>
                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Amenities</h2>
                    <p>At Piscataqua Marina we want to ensure you have a great stay, which is why we have available:
                    </p>
                    <ul>
                        <li>Showers</li>
                        <li>30-100 amp electrical service</li>
                        <li>Ice</li>
                        <li>Water at the slip</li>
                        <li>Free WiFi</li>
                        <li>Complimentary pump-out</li>
                        <li>Parking</li>
                        <li>Laundry Facilities</li>
                    </ul>
                    <p>
                    Our concrete floating docks are almost as stable as land.  Dave, our dockmaster, is on site Wednesdays through Sundays during the summer season.</p>
                </div>
            </div>
            <div className="row d-flex flex-row-reverse dark">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                    <img className="home-item-image m-2 rounded" src="images/piscataqua_marina_aerial_with_portsmouth.jpg" alt="Piscataqua_Marina_Aerial_View_with_Portsmouth_NH"/>

                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Explore</h2>
                    <p>Our small, 27 slip marina offers a true family atmosphere.  A short walk across the Memorial Bridge puts you in the middle of historic downtown Portsmouth.  Listen to concerts in Prescott Park directly across the river.  Fine dining and nightlife is within walking distance in Portsmouth and Kittery Foreside.
                    </p>
                    <Link to="/explore" id="weather" className="nav-item home-page-btn mt-0" >See What's Nearby</Link>
                    <p>
                    Come for a visit and see for yourself what a great spot we have!
                    </p>

                </div>
            </div>
            <div className="row light">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                <img className="home-item-image m-3 rounded"src="images/piscataqua_marina_aerial_picnic_area.jpg" alt="Piscataqua_Marina_Picnic_Area"/>
                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Local Conditions</h2>
                    <div className="d-flex flex-column align-items-center">
                        <div className="weather-container">
                            <iframe title="weather-widget" src="https://cdnres.willyweather.com/widget/loadView.html?id=119172" frameBorder="0" scrolling="no">
                            </iframe>
                            <a className="weather-widget-link"  href="https://www.willyweather.com/me/york-county/piscataqua-river--badgers-island.html" rel="noopener noreferrer"  target="_blank">Piscataqua River-Badgers Island weather info</a>
                        </div>
                            <a  className="nav-item home-page-btn" href="https://www.willyweather.com/me/york-county/piscataqua-river--badgers-island.html" target="_blank" rel="noopener noreferrer" >Piscataqua Marina Weather Details</a>
                    </div>
                </div>
            </div>

        </main>
        <div className="map-container">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.0823995563564!2d-70.75346204930547!3d43.0817629790427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2bf100c5a9c07%3A0xf3a64ad548c65dde!2sBadgers%20Island%20Marina!5e0!3m2!1sen!2sus!4v1579811561587!5m2!1sen!2sus" frameBorder="0" allowFullScreen=""></iframe>
        </div>

        </>
    )
}

export default Home;
