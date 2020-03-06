import React, {useEffect} from 'react';
import {Link} from "react-router-dom";


function Rates (props){

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return(
        <main className="container">
            <div className="explore-location-description underline">
                <p>
                    We offer seasonal slips for winter and summer.  Our summer season runs May 15th to October 15th.  Please <Link to="/contact" className="nav-item" style={{margin:0}}>contact us</Link> for pricing and availability.
                </p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="explore-location-description">
                        <p>
                            Transient docking is also available at the following rate:
                        </p>
                    </div>
                    <table className="table table table-striped w-75" >
                      <thead>
                        <tr>
                          <th scope="col">Vessel Size</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Up to 40’</td>
                          <td>$3/loa</td>
                        </tr>
                        <tr>
                          <td>41-70’</td>
                          <td>$4/loa</td>
                        </tr>
                        <tr>
                          <td>70’+</td>
                          <td>$5/loa</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />

                    <div className="explore-location-description">
                        <p>
                            Electrical Service
                        </p>
                    </div>

                    <table className="table table table-striped w-75" >
                      <thead>
                        <tr>
                          <th scope="col">Service</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Single 30 amp</td>
                          <td>$10/day</td>
                        </tr>
                        <tr>
                          <td>Double 30 or single 50</td>
                          <td>$20/day</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div className="col-md-6 d-flex flex-row justify-content-center">
                {/*Dockwa Embeded Reservation Form https://dockwa.com */}

                <iframe title="dockwa" src="https://dockwa.com/explore/destination/63cxm-piscataqua-marina/embed" id="dockwa-embed" frameBorder="0"  style={{height:"650px"}}></iframe>
                </div>
            </div>
            <div>
                <img src="/images/piscataqua_marina_dock_layout.jpg" alt="dock layout" style={{width:"100%"}}/>
            </div>

        </main>
    )
}

export default Rates;
