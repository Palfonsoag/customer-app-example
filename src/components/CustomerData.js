import React from "react";
import PropTypes from "prop-types";
import CustomerActions from "./CustomerActions";
import { accessControl } from "../helpers/accessControl";
import { CUSTOMER_EDIT, CUSTOMER_VIEW } from "../constants/permissions";
const CustomerData = ({
  id,
  name,
  dni,
  age,
  onBack,
  isDeleteAllow,
  onDelete
}) => {
  return (
    <div>
      <div className="customers-data">
        <h2>{"Customer Info"}</h2>
        <div>
          <strong>{"Name: "}</strong>
          <i>{name}</i>
        </div>
        <div>
          <strong>{"DNI: "}</strong>
          <i>{dni}</i>
        </div>
        <div>
          <strong>{"Age: "}</strong>
          <i>{age}</i>
        </div>
      </div>
      <CustomerActions>
        <button onClick={onBack}>Back</button>
        {isDeleteAllow && <button onClick={() => onDelete(id)}>Delete</button>}
      </CustomerActions>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func
};

export default accessControl([CUSTOMER_VIEW], CustomerData);
