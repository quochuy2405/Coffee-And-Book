import { configureStore } from "@reduxjs/toolkit";
import Counter from "../components/ItemDetails/Counter"
import CounterBill from "./CounterBill"
const rootReducer={
  counter:Counter,
  counterBill:CounterBill,
}
const store= configureStore({
  reducer:rootReducer,
})
export default store;
