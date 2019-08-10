import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS, CREATE_CUSTOMER } from "../constants";

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [CREATE_CUSTOMER]: (state, action) => [...state, action.payload]
  },

  []
);
