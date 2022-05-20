const React = require("react");
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const Default = require("./layouts/default");
import Card from "react-bootstrap/Card";



function restaurant() {
    return (
      <Default class="restimage">
        {/* Brio Itallian Grille */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://loremflickr.com/300/350/abstract" />
        <Card.Body>
            <Card.Title>Brio Italian Grille</Card.Title>
        <Card.Text>
        Whether you're stopping in for a quick bite or toasting a milestone, celebrate with exquisite authentic Italian cuisine prepared to perfection at Brio.
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>6653 Las Vegas Blvd S</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
                         
        {/* American Restaurant */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://baconmockup.com/300/350/" />
        <Card.Body>
            <Card.Title>American Restaurant</Card.Title>
        <Card.Text>
        Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>2620 Regatta Dr Suite 118</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>

        {/* Honey Salt */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://unsplash.it/600/400?image=501" />
        <Card.Body>
            <Card.Title>Honey Salt</Card.Title>
        <Card.Text>
        Honey Salt serves market inspired cuisine that draws from our travels, childhood memories, and countless meals we have shared in our home with friends and family over the years.
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>1031 S Rampart Blvd</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
      </Default>
    );
  }



module.exports = restaurant;