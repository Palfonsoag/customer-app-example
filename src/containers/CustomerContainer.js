import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame
          header={`cliente ${this.props.dni}`}
          body={<p>Datos del cliente {this.props.customer.name}</p>}
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
  customer: state.customers.find(client => client.dni === props.dni)
});

export default connect(
  mapStateToProps,
  {}
)(CustomerContainer);
