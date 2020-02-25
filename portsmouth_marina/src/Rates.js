import React, {useEffect} from 'react';


function Rates (props){

    useEffect(() => {
        console.log("re-render");
        window.scrollTo(0,0);
    });

    return(
        <main className="container">
            <div className="explore-location-description">
                <p>
                    We offer seasonal slips for winter and summer.  Our summer season runs May 15th to October 15th.  Please contact us for pricing and availability.
                </p>
                <p>
                    Transient docking is also available at the following rate:
                </p>
            </div>
            <table className="table table table-striped w-50" >
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
                  <td>40-70’</td>
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

            <table className="table table table-striped w-50" >
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
            <br />
        </main>
    )
}

export default Rates;
