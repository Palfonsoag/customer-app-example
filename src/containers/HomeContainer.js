import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerActions from "../components/CustomerActions";
class HomeContainer extends Component {
  handleOnClick = () => {
    console.log("handle On click");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleOnClick}>
                  Listado de clientes
                </button>
              </CustomerActions>
            </div>
          }
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;
