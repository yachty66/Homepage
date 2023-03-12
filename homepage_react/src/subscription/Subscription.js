import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../css/Subscription.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Subscription() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

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
      const responseData = await response.json();
      if (responseData.status === "valid") {
        setMessageType("success");
        setMessage("Success. You are on the list.");
      } else {
        setMessageType("error");
        setMessage("Something went wrong.");
      }
    } catch (error) {
      setMessageType("error");
      setMessage("Something went wrong.");
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
      {message && (
        <p
          className={`mt-3 ${
            messageType === "success" ? "text-success" : "text-danger"
          }`}
        >
          {message}
        </p>
      )}
    </Container>
  );
}

export default Subscription;
