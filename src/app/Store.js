import { configureStore } from "@reduxjs/toolkit";
import CounterBill from "./CounterBill"
import  KMOpen  from "./KMOpen";
const rootReducer={
  counterBill:CounterBill,
  KMOpen:KMOpen
}
const store= configureStore({
  reducer:rootReducer,
})
export default store;
