import { handleActions } from "redux-actions";
import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from "../constants";

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [CREATE_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
      const { id } = action.payload;
      const newCustomersList = state.reduce((acc, customer) => {
        if (customer.id === id) {
          return [...acc, action.payload];
        } else {
          return [...acc, customer];
        }
      }, []);
      return newCustomersList;
    },
    [DELETE_CUSTOMER]: (state, action) =>
      state.filter(c => c.id !== action.payload)
  },

  []
);
