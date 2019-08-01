import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";
const customers = [
  {
    dni: "27000000",
    name: "Juan Perez",
    age: 37
  },
  {
    dni: "30000000",
    name: "Maria Vargas",
    age: 35
  },
  {
    dni: "33000000",
    name: "Luis Martinez",
    age: 32
  },
  {
    dni: "28000000",
    name: "Pedro Perez",
    age: 30
  }
];
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
