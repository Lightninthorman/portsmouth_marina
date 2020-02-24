import React from 'react';


function Home (props){

    return(
        <main className="container-fluid">
            <div className="row d-flex flex-row justify-content-center align-items-baseline my-5">
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <a className="link-icon" href="#"><img  src="images/Piscataqua_Marina_Rates_Icon.png" /></a>
                    <h4>Rates</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center  mx-5">
                    <a className="link-icon" href="#"><img src="images/Piscataqua_Marina_Weather_Icon.png" /></a>
                    <h4>Weather Conditions</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <a className="link-icon" href="#"><img src="images/Piscataqua_Marina_Application_Icon.png" /></a>
                    <h4>Applications & Policies</h4>
                </div>
                <div className="icon-container col-xs-3 d-flex flex-column align-items-center mx-5">
                    <a className="link-icon" href="#"><img src="images/Piscataqua_Marina_Contact_Icon.png" /></a>
                    <h4>Contact</h4>
                </div>
            </div>


            <div className="row d-flex flex-row-reverse mt-5 dark">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                    <img className="w-100 m-2 rounded" src="images/piscataqua_marina_aerial_with_portsmouth.jpg" />

                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Piscataqua Marina</h2>
                    <p>Welcome to Piscataqua Marina, formerly known as Badgers Island Marina East.  We are located about 2 Nm from the mouth of the Piscataqua River at the base of the Memorial Bridge between Badgers’ Island in Maine and Portsmouth, NH.  Our marina offers slips ranging from 32-125’ for summer, winter and transient occupancy.
                    </p>
                </div>
            </div>
            <div className="row light ">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                        <img className="w-100 m-3 rounded" src="images/piscataqua_marina_ameneties.jpg" />
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
                    <img className="w-100 m-2 rounded" src="images/piscataqua_marina_aerial_with_portsmouth.jpg" />

                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Explore</h2>
                    <p>Our small, 27 slip marina offers a true family atmosphere.  A short walk across the Memorial Bridge puts you in the middle of historic downtown Portsmouth.  Listen to concerts in Prescott Park directly across the river.  Fine dining and nightlife is within walking distance in Portsmouth and Kittery Foreside.
                    </p>
                    <a  className="nav-item home-page-btn mt-0" href="#" >See What's Nearby</a>
                    <p>
                    Come for a visit and see for yourself what a great spot we have!
                    </p>

                </div>
            </div>
            <div className="row light">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
                <img className="w-100 m-3 rounded"src="images/piscataqua_marina_aerial_picnic_area.jpg" />
                </div>
                <div className="col-md-7 py-4 px-5" >
                    <h2 className="category-heading">Local Conditions</h2>
                    <div className="d-flex flex-column align-items-center">
                        <div className="weather-container">
                            <iframe src="https://cdnres.willyweather.com/widget/loadView.html?id=119172" frameBorder="0" scrolling="no">
                            </iframe>
                            <a className="weather-widget-link"  href="https://www.willyweather.com/me/york-county/piscataqua-river--badgers-island.html" rel="nofollow" target="_blank">Piscataqua River-Badgers Island weather info</a>
                        </div>
                            <a  className="nav-item home-page-btn" href="https://www.willyweather.com/me/york-county/piscataqua-river--badgers-island.html" rel="nofollow" target="_blank">Piscataqua Marina Weather Details</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;
