const React = require("react");
const { Form, Button } = require("react-bootstrap");
const Default = require("./layouts/default");

function User({ users }) {
    return(
        <Default> 
            <h1>Applicant Form</h1>
            <Form>
            {/* name input */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            {/* address input */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" placeholder="Enter Address" />
            </Form.Group>
            {/* email input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            {/* password input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            {/* phone input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="Phone" placeholder="Enter Phone Number" />
            </Form.Group>
            {/* button */}
            <Button variant="primary" type="submit"> 
                Submit
            </Button>
            </Form> 
        </Default>
    );
}

// // NEW
// breads.get("/menu", (req, res) => {
//     Baker.find().then((foundBakers) => {
//       res.render("menu", {
//         bakers: foundBakers,
//       });
//     });
//   });

  
module.exports = User;