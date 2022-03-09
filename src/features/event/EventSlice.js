import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: [{title: "test"}, {title: "test 2", description: "lorem ipsum igitu"}],
  reducers: {
    addEvents: (state, action)=> {
      return action.payload
    }
  }
})


export const { addEvents } = eventSlice.actions;
export const selectEvents = (state) => state.event;

export default eventSlice.reducer;