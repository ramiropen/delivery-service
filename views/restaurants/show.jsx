const React = require("react");
const Default = require("./layouts/default");

function Show({ restaurant }) {
  return (
    <Default>
      <h3>{restaurant.name}</h3>
      <img src={restaurant.image} alt={restaurant.name} />
      <h1>{restaurant.address}</h1>
      <h1>{restaurant.city}</h1>
      <h1>{restaurant.state}</h1>
      <h1>{restaurant.zip}</h1>
      <br />
      <h1>{restaurant.cusines}</h1>
      <img src={bread.image} alt={bread.name} />
      <p>{bread.getBakedBy()}</p> 
      <a href={`/restaurants/${restaurant.id}/edit`}><button>Edit</button></a>
      <form action={`/restaurants/${restaurant.id}?_method=DELETE`} method='POST'>
        <input type='submit' value='DELETE' />
      </form>
      <li>
        <a href='/restaurant'>Go home</a>
      </li>
    </Default>
  );
}

module.exports = Show;

