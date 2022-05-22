const React = require('react')
const Default = require('../layouts/Default')

function Index ({restaurants, title}) {
    
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <h3>Restaurants</h3>
        <div className="newButton">
          <a href="/new"><button>Add a new restaurant</button></a>
        </div>
         <p>I have {restaurants[0].name} restaurant!</p>
        <ul>
        {
          restaurants.map((restaurant, index)=> {
            return (
              <li key={restaruant._id}>
                <a href={`/restaurants/${bread._id}`}>
                  {restaurant.name}
                </a>
              </li>
            )
          })
        }
        </ul>

      </Default>
    )
}

module.exports = Index