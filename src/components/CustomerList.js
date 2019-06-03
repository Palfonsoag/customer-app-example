import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";

const CustomerList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customer-list">
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
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomerList;
