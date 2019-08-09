import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";

const isRequired = value => !value && "Este campo es requerido";

const MyField = ({ input, meta }) => (
  <div>
    <input type="text" {...input} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>{"Customer Edition"}</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field
            name="name"
            component={MyField}
            type="text"
            validate={isRequired}
          />
        </div>
        <div>
          <label htmlFor="dni">DNI: </label>
          <Field
            name="dni"
            component={MyField}
            type="text"
            validate={isRequired}
          />
        </div>
        <div>
          <label htmlFor="Age">Age: </label>
          <Field
            name="age"
            component={MyField}
            type="number"
            validate={isRequired}
          />
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

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);
