import React, { Component } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import PropTypes from "prop-types";

class FormSearch extends Component {
  render() {
    return (
      <Container fluid="md" className="mb-3">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form onSubmit={this.props.onSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search Movie"
                  aria-label="Search Movie"
                  aria-describedby="basic-addon2"
                  type="text"
                  name="queryValue"
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    type="submit"
                    onSubmit={this.props.onSubmit}
                  >
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormSearch;

FormSearch.propTypes = {
  onSubmit: PropTypes.func,
};
