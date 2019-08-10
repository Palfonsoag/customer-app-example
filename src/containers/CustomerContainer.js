import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { getCustomerByDni } from "../selectors/customers";
import { fetchCustomers } from "../actions/fetchCustomers";
import { updateCustomer } from "../actions/updateCustomer";

class CustomerContainer extends Component {
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values));
    const { id } = values;
    this.props.updateCustomer(id, values);
  };

  handleOnBack = () => {
    this.props.history.goBack();
  };

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        if (this.props.customer) {
          const CustomerControl = match ? CustomerEdit : CustomerData;
          return (
            <CustomerControl
              {...this.props.customer}
              onSubmit={this.handleSubmit}
              onBack={this.handleOnBack}
            />
          );
        }
      }}
    />
  );
  render() {
    return (
      <div>
        <AppFrame
          header={`Client ${this.props.dni}`}
          body={this.renderBody()}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCustomers, updateCustomer }
  )(CustomerContainer)
);
