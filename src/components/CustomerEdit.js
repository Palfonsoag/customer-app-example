import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>{"Customer Edition"}</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="dni">DNI: </label>
          <Field name="dni" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Age">Age: </label>
          <Field name="age" component="input" type="number" />
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
};

const mapStateToProps = (state, props) => ({
  initialValues: props
});
const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);
export default connect(
  mapStateToProps,
  {}
)(CustomerEditForm);
