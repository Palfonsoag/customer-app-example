import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "../actions/fetchCustomers";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomerActions from "../components/CustomerActions";

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }
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
    const { customers } = this.props;
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

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
  customers: [
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
    },
    {
      dni: "28000000",
      name: "Pedro Perez",
      age: 30
    }
  ]
};

export default withRouter(
  connect(
    null,
    { fetchCustomers }
  )(CustomersContainer)
);
