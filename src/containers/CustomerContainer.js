import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { getCustomerByDni } from "../selectors/customers";

class CustomerContainer extends Component {
  //<p>Datos del cliente {this.props.customer.name}</p>

  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.customer} />;
      }}
    />
  );
  render() {
    return (
      <div>
        <AppFrame
          header={`cliente ${this.props.dni}`}
          body={this.renderBody()}
        />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
});

export default connect(
  mapStateToProps,
  {}
)(CustomerContainer);
