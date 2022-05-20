const React = require("react");
const Default = require("./layouts/default");
import {ListGroup, ListGroupItem, CardGroup} from 'react-bootstrap';
import Card from "react-bootstrap/Card";



function restaurant() {
    return (
      <Default class="restimage">
        <CardGroup>
  <Card>
      {/* Brio Itallian Grille */}
    <Card.Img variant="top" src="https://loremflickr.com/300/350/abstract" />
    <Card.Body>
      <Card.Title> Brio Itallian Grille</Card.Title>
      <Card.Text>
      Whether you're stopping in for a quick bite or toasting a milestone, celebrate with exquisite authentic Italian cuisine prepared to perfection at Brio.
        Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.
      <Card.Title>6653 Las Vegas Blvd S</Card.Title>
      </Card.Text>
      <Card.Link href="https://www.brioitalian.com/">Website</Card.Link>
    </Card.Body>
  </Card>


  {/* American Restaurant */}
  <Card>
  <Card.Img variant="top" src="https://baconmockup.com/300/350/" />
    <Card.Body>
      <Card.Title>American Restaurant</Card.Title>
      <Card.Text>
      Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.
      <Card.Title>2620 Regatta Dr Suite 118</Card.Title>
      </Card.Text>
      <Card.Link href="https://americanalasvegas.com/https://honeysalt.com/about-honey-salt/">Website</Card.Link>
    </Card.Body>
  </Card>



  {/* Honey Salt */}
  <Card>
  <Card.Img variant="top" src="https://unsplash.it/300/350?image=501" />
    <Card.Body>
      <Card.Title>Honey Salt</Card.Title>
      <Card.Text>
      Honey Salt serves market inspired cuisine that draws from our travels, childhood memories, and countless meals we have shared in our home with friends and family over the years.
      <Card.Title>1031 S Rampart Blvd</Card.Title>
      </Card.Text>
      <Card.Link href="https://honeysalt.com/about-honey-salt/">Website</Card.Link>
    </Card.Body>
  </Card>
</CardGroup>
      </Default>
    );
  }



module.exports = restaurant;