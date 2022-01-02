import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import SignUpForm from "../components/signupForm";

export default () => {
  return (
    <div className="SignUp">
      <Container>
        <Row className="my-4">
          <Col />
          <Col lg="8">
            <h3>
              <u>Sign Up</u>
            </h3>
            <hr />
            <Card>
              <CardBody>
                <SignUpForm />
              </CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};
