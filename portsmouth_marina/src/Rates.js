import React from 'react';


function Rates (props){


    return(
        <main className="container">
            <table className="table table-striped" >
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transient</td>
                  <td>$50 / ft</td>
                  <td>Daily. Max 1 week.</td>
                </tr>
                <tr>
                  <td>Winter Slip</td>
                  <td>$1000</td>
                  <td>October - April</td>
                </tr>
                <tr>
                  <td>Summer Slip</td>
                  <td>$25000</td>
                  <td>May - September</td>
                </tr>
              </tbody>
            </table>
        </main>
    )
}

export default Rates;
