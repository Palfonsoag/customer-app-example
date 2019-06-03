import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/customers">Listado de clientes</Link>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;
