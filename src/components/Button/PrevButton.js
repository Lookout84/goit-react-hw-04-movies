import React, { Component } from "react";
import { Button } from "react-bootstrap";

class PrevButton extends Component {
  render() {
    return (
      <Button
        className="mr-2"
        variant="primary"
        type="button"
        onClick={this.props.onClick}
      >
        Prev page
      </Button>
    );
  }
}

export default PrevButton;
