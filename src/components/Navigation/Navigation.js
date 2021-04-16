import React from "react";
// import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";

const Navigation = ({ match }) => {
  return (
    <Navbar className="mb-3" bg="primary" variant="dark" >
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to={`${match.url}`}>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to={`${match.url}movies`}>
          Movies
        </Nav.Link>
      </Nav>
    </Navbar>
    // <Nav as="ul">
    //   <Nav.Item as={NavLink} to={`${match.url}`}>
    //     Home
    //   </Nav.Item>
    //   <Nav.Item as={NavLink} to={`${match.url}movies`}>
    //     Movies
    //   </Nav.Item>
    // </Nav>
  );
};
export default withRouter(Navigation);
