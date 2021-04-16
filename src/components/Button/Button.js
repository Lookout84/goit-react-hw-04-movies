import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class NextButton extends Component {
  render() {
    return (
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button
              variant="primary"
              type="button"
              onClick={this.props.onClick}
            >
              Next page
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NextButton;
