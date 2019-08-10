import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";

class NewCustomerContainer extends Component {
  handleSubmit = () => {};
  handleOnSubmitSuccess = () => {};
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

NewCustomerContainer.propTypes = {};

const mapStateToProps = (state, props) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(NewCustomerContainer)
);
