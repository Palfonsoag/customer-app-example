import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { Prompt } from "react-router-dom";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";
import CustomerActions from "./CustomerActions";

const isRequired = value => !value && "This Field is required";

const isNumber = value => isNaN(Number(value)) && "This field must be a number";
const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const validate = values => {
  const error = {};
  if (!values.name) {
    error.name = "Name field is required";
  }
  if (!values.dni) {
    error.dni = "Dni field is required";
  }
  return error;
};

class CustomerEdit extends Component {
  componentDidMount() {
    if (this.txt) {
      this.txt.focus();
    }
  }

  renderField = ({ input, meta, type, label, name, withFocus }) => (
    <div>
      <label htmlFor={name}>{label} </label>
      <input
        type={type ? type : "text"}
        {...input}
        ref={withFocus && (txt => (this.txt = txt))}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );

  render() {
    const {
      handleSubmit,
      submitting,
      onBack,
      pristine,
      submitSucceeded
    } = this.props;
    return (
      <div>
        <h2>{"Customer Edition"}</h2>
        <form onSubmit={handleSubmit}>
          <Field
            withFocus
            name="name"
            component={this.renderField}
            type="text"
            //validate={isRequired}
            label="Nombre: "
          />

          <Field
            name="dni"
            component={this.renderField}
            type="text"
            validate={[isNumber]}
            label="DNI: "
          />

          <Field
            name="age"
            component={this.renderField}
            type="number"
            validate={[isNumber, isRequired]}
            label="Age: "
            parse={toNumber}
          />
          <CustomerActions>
            <button type="submit" disabled={pristine || submitting}>
              Accept
            </button>
            <button onClick={onBack} type="button" disabled={submitting}>
              Cancel
            </button>
          </CustomerActions>
          <Prompt
            when={!pristine && !submitSucceeded}
            message="the changes would be lost if you continue"
          />
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = {
  onBack: PropTypes.func.isRequired
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit", validate })(
  CustomerEdit
);
export default setPropsAsInitial(CustomerEditForm);
