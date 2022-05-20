const React = require('react');
const Default = require("./layouts/default");
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';



function Menu({foundMenu}) {
  return (
    <Default>
    {foundMenu.name}  
    {/* <head>
    <link rel="stylesheet" href="/main.css" />
    </head>
    <h2>ADD FOOD TO THE CART</h2>
    <br />
    <Card style={{ width: '286px' }}>
    <Card.Img variant="top" src="https://loremflickr.com/286/180/food" />
      <Card.Body>
        <Card.Title><span style={{fontWeight: 'bold'}}>Buffalo Wings</span></Card.Title>
        <Card.Text>
          Add some text to the descriptions that makes the food sound delicious.
          {"\n"}Price: $19.99
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card> */}
    </Default>
  );
}
module.exports = Menu;