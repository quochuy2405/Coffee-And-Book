import { configureStore } from "@reduxjs/toolkit";
import CounterBill from "./CounterBill"
const rootReducer={
  counterBill:CounterBill,
}
const store= configureStore({
  reducer:rootReducer,
})
export default store;
