import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomerActions from "./CustomerActions";

const isRequired = value => !value && "This Field is required";

const isNumber = value => isNaN(Number(value)) && "This field must be a number";

const validate = values => {
  console.log("valueeeeeeees", values);
  const error = {};
  if (!values.name) {
    error.name = "Name field is required";
  }
  if (!values.dni) {
    error.dni = "Dni field is required";
  }
  return error;
};

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label} </label>
    <input type={type ? type : "text"} {...input} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <h2>{"Customer Edition"}</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={MyField}
          type="text"
          //validate={isRequired}
          label="Nombre: "
        />

        <Field
          name="dni"
          component={MyField}
          type="text"
          validate={[isNumber]}
          label="DNI: "
        />

        <Field
          name="age"
          component={MyField}
          type="number"
          validate={[isNumber, isRequired]}
          label="Age: "
        />
        <CustomerActions>
          <button type="submit" disabled={submitting}>
            Accept
          </button>
          <button onClick={onBack} disabled={submitting}>
            Cancel
          </button>
        </CustomerActions>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(
  CustomerEdit
);
export default setPropsAsInitial(CustomerEditForm);
