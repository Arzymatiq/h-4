import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        incement: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        reset: (state) => {
            state.counter = 0;
        },
    },
});
export const { incement, reset } = counterSlice.actions;
export default counterSlice.reducer;
