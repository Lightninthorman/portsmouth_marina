import React, {useEffect} from 'react';
let exploreData = require('./explore-data.json')

function Explore (){

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return(
        <main className="container-fluid">
            <div className="explore-location-description">
                <p>
                    While Portsmouth and the Kittery outlets are extremely close to the marina, there's fun to be had even closer. As soon as you step off the dock you're less than a mile from a wide variety of restaurants, shopping, and coastal beauty, and only a short walk into Portsmouth, NH.
                </p>
            </div>
            <div className="explore-location underline">
                <h2>Portsmouth, NH</h2>
            </div>
            <div className="explore-location-description">
                <p>
                    The Seacoast Region's most popular destination is historic downton Portsmouth, NH. This extremely walkable city offers food, entertainment, and history like nothing else around.
                </p>
            </div>
            <div className="row justify-content-center">
                {exploreData.portsmouth.map((place, key) => {
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
                <h2>Badger's Island, ME</h2>
            </div>
            <div className="explore-location-description">
                <p>
                    Our own island offers great food and drink options when you don't feel like venturing out.
                </p>
            </div>
            <div className="row justify-content-center">
                {exploreData.badgersIsland.map((place, key) => {
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
                <h2>Kittery Foreside, ME</h2>
            </div>
            <div className="explore-location-description">
                <p>
                    A short ¾ mile is Kittery Foreside which has become famous locally for its wide variety of dining and drinking options. While in Kittery Foreside check out the many small eclectic shops and art galleries like FOLK, the Foreside Bike Guys, Tayla Mac Boutique, Maine Meat, Buoy Gallery, Red Door Pottery and more.
                </p>
            </div>
            <div className="row justify-content-center">
                {exploreData.kittery.map((place, key) => {
                    return(
                        <div className="explore-item col-md-3" key={key}>
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

export default Explore;
