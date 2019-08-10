import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { SubmissionError } from "redux-form";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { createCustomer } from "../actions/createCustomer";

class NewCustomerContainer extends Component {
  handleSubmit = values => {
    return this.props.createCustomer(values).then(r => {
      if (r.error) {
        throw new SubmissionError(r.payload);
      }
    });
  };
  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };
  handleOnBack = () => {
    this.props.history.goBack();
  };
  renderBody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
      />
    );
  };
  render() {
    return (
      <div>
        <AppFrame header={"New Customer"} body={this.renderBody()} />
      </div>
    );
  }
}

NewCustomerContainer.propTypes = { createCustomer: PropTypes.func.isRequired };

const mapStateToProps = (state, props) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    { createCustomer }
  )(NewCustomerContainer)
);
