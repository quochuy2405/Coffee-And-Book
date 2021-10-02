import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
  name: "Counter",
  initialState: 1,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
        if(state<2)
        {
            return 1;
        }
      return state - 1;
    },
  },
});
const {actions,reducer}=Counter;
export const {increase,decrease}=actions;
export default reducer;

