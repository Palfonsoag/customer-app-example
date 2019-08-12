import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";
import { accessControl } from "../helpers/accessControl";
import {
  CUSTOMER_EDIT,
  CUSTOMER_VIEW,
  CUSTOMER_LIST
} from "../constants/permissions";
const CustomerList = ({ customers, urlPath }) => {
  return (
    <div className="customers-list">
      {customers.map(customer => (
        <CustomerListItem
          key={customer.dni}
          name={customer.name}
          editAction={"Edit"}
          delAction={"Delete"}
          urlPath={urlPath}
          dni={customer.dni}
        />
      ))}
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default accessControl([CUSTOMER_LIST], CustomerList);
