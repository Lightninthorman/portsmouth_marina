import React from 'react';
import Header from './Header.js';

function Explore (props){

    return(
        <main className="container-fluid">
            <div className="explore-location">
                <h2>Badger's Island</h2>
            </div>
            <div className="row justify-content-center">
                <div className="explore-item col-md-3">
                    <h5>Ore Nells BBQ</h5>
                    <img src="/images/explore/ore_nell.png" />
                    <a href="https://www.orenellsbbq.com/" rel="nofollow" target="_blank" rel="noopener noreferrer">Ore Nells BBQ</a>
                </div>
                <div className="explore-item col-md-3">
                    <h5>Name of Place</h5>
                    <p>Quick description</p>
                    <p>link to site</p>
                </div>
                <div className="explore-item col-md-3">
                    <h5>Name of Place</h5>
                    <p>Quick description</p>
                    <p>link to site</p>
                </div>
                <div className="explore-item col-md-3">
                    <h5>Name of Place</h5>
                    <p>Quick description</p>
                    <p>link to site</p>
                </div>
            </div>
        </main>
    )
}

export default Explore;
