import React, { Component } from "react";
import { Button } from "react-bootstrap";

class NextButton extends Component {
  render() {
    return (
      <Button variant="primary" type="button" onClick={this.props.onClick}>
        Next page
      </Button>
    );
  }
}

export default NextButton;
