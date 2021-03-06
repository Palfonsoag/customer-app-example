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
import { deleteCustomer } from "../actions/deleteCustomer";
import { SubmissionError } from "redux-form";

class CustomerContainer extends Component {
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    const { id } = values;
    return this.props.updateCustomer(id, values).then(r => {
      if (r.error) {
        throw new SubmissionError(r.payload);
      }
    });
  };

  handleOnBack = () => {
    this.props.history.goBack();
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  handleDelete = id => {
    this.props.deleteCustomer(id).then(v => {
      this.props.history.goBack();
    });
  };

  renderCustomerControl = (isEditing, isDeleting) => {
    if (this.props.customer) {
      const CustomerControl = isEditing ? CustomerEdit : CustomerData;
      return (
        <CustomerControl
          {...this.props.customer}
          onSubmit={this.handleSubmit}
          onBack={this.handleOnBack}
          onSubmitSuccess={this.handleOnSubmitSuccess}
          isDeleteAllow={!!isDeleting}
          onDelete={this.handleDelete}
        />
      );
    }
    return null;
  };

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match: isEditing }) => (
        <Route
          path="/customers/:dni/delete"
          children={({ match: isDeleting }) => {
            return this.renderCustomerControl(isEditing, isDeleting);
          }}
        />
      )}
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
  updateCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCustomers, updateCustomer, deleteCustomer }
  )(CustomerContainer)
);
