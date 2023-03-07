import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../css/Subscription.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Subscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://homepage-379410.ew.r.appspot.com/add_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(`Fetch Error: ${error}`);
    }
  };

  return (
    <Container className="subscription-container mt-5">
      <p className="text">
        Subscribe for getting short posts about engineering, startups, and
        everything else in your inbox.
      </p>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center mt-3">
          <Col>
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="demis@deepmind.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" className="submit-button">
              Subscribe
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Subscription;