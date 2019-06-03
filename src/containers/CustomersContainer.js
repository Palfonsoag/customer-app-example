import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomerActions from "../components/CustomerActions";

const customers = [
  {
    dni: "27000000",
    name: "Juan Perez",
    age: 37
  },
  {
    dni: "30000000",
    name: "Maria Vargas",
    age: 35
  },
  {
    dni: "33000000",
    name: "Luis Martinez",
    age: 32
  }
];

class CustomersContainer extends Component {
  handleAddNew = () => {
    console.log("handle Add New On click");
    this.props.history.push("/customers/new");
  };

  renderBody = customers => (
    <div>
      <CustomerList customers={customers} urlPath={"customers/"} />
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomerActions>
    </div>
  );
  render() {
    return (
      <div>
        <AppFrame
          header="Listado de clientes"
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}

CustomersContainer.propTypes = {};

export default withRouter(CustomersContainer);
