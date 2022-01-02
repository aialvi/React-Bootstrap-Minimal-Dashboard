import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import LoginForm from "../components/loginForm.jsx";

export default () => {
  return (
    <div className="Login">
      <Container>
        <Row className="my-4">
          <Col />
          <Col lg="8">
            <h3>
              <u>Sign In</u>
            </h3>
            <hr />
            <Card>
              <CardBody>
                <LoginForm />
              </CardBody>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};
