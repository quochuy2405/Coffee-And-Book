import { createSlice } from "@reduxjs/toolkit";

const CounterBill= createSlice({
    name:"CounterBill",
    initialState:0,
    reducers:{
        increaseBill(state) {
            return state + 1;
          },
          decreaseBill(state) {
              if(state<1)
              {
                  return 0;
              }
            return state - 1;
          },
    }
});
const {actions,reducer}=CounterBill;
export const {increaseBill,decreaseBill } = actions;
export default reducer;