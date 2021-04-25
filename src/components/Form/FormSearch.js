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
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  validateInput = (value) => {
    if (value.trim() !== "") {
      this.setState({ query: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const queryValue = this.validateInput(this.state.query);
    this.props.onSubmit(queryValue);
    this.setState({
      query: "",
    });
  };

  render() {
    return (
      <Container fluid="md" className="mb-3">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form onSubmit={this.handleSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search Movie"
                  aria-label="Search Movie"
                  aria-describedby="basic-addon2"
                  type="text"
                  name="queryValue"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button
                    variant="outline-secondary"
                    type="submit"
                    onSubmit={this.handleSubmit}
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
