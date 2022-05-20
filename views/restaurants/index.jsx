const React = require('react')
const Def = require('../default')

function index (data) {
    let restaurantsFormatted = data.restaurants.map((restaurant) =>{
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/restaurant/${restaurant.id}`}>
                        {restaurant.name}
                    </a>
                </h2>
                <p className="text-center">{restaurant.cuisines}</p>
                    <img className="img-thumbnail" src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>Place to Rant and Rave About</h1>
                <div className="row">{placesFormatted}</div>
            </main>
        </Def>
    );

}

module.exports = index;