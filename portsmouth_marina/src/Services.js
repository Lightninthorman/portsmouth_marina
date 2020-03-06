import React, {useEffect} from 'react';
let serviceData = require('./services-data.json')



function Services (props){

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return(
        <main className="container">
            <div className="explore-location underline">
                <h2>Groceries</h2>
            </div>
            <div className="explore-location-description">
                <p>
                The following stores are all located adjacent to each other in Kittery’s “Gourmet Alley”. Located at the intersection of State Rd and Walker Street, it’s about a 1/2 mile away.
                </p>
            </div>
            <div className="row justify-content-center">
                {serviceData.groceries.map((place, key) => {
                    return(
                        <div className="explore-item col-md-3 " key={key}>
                            <a className="d-flex flex-column align-items-center" href={place.link} target="_blank" rel="noopener noreferrer">
                                <h5>{place.name}</h5>
                                <img src={place.image} alt={place.name}/>
                                <p>
                                    {place.description}
                                </p>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="explore-location underline">
                <h2>Fuel</h2>
            </div>
            <div className="explore-location-description">
                <p>
                The closest fuel dock is located at Portsmouth Yacht Club near the mouth of the river. It’s coordinates are <a href="https://goo.gl/maps/TomSD7WmDkRu5iZr7" target="_blank" rel="noopener noreferrer">43°04'389" N; 70°43"07" W</a>
                </p>
            </div>
            <div className="row justify-content-center">
                {serviceData.fuel.map((place, key) => {
                    return(
                        <div className="explore-item col-md-3 " key={key}>
                            <a className="d-flex flex-column align-items-center" href={place.link} target="_blank" rel="noopener noreferrer">
                                <h5>{place.name}</h5>
                                <img src={place.image} alt={place.name}/>
                                <p>
                                    {place.description}
                                </p>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="explore-location underline">
                <h2>Repairs</h2>
            </div>
            <div className="explore-location-description">
                <p>
                We recommend Island Marine Services for boat repairs. They are a full service shop located nearby. They can be reached at <a href="tel:+12074393810">(207) 439-3810</a>.
                </p>
            </div>
            <div className="row justify-content-center">
                {serviceData.repairs.map((place, key) => {
                    return(
                        <div className="explore-item col-md-3 " key={key}>
                            <a className="d-flex flex-column align-items-center" href={place.link} target="_blank" rel="noopener noreferrer">
                                <h5>{place.name}</h5>
                                <img src={place.image} alt={place.name}/>
                                <p>
                                    {place.description}
                                </p>
                            </a>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Services;
