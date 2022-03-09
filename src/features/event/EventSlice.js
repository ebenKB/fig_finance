import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    data: [{title: "test"}, {title: "test 2", description: "lorem ipsum igitu"}],
    meta: {
      page: 1,
      limit: 10,
    }
  },
  reducers: {
    addEvents: (state, action)=> {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
})


export const { addEvents } = eventSlice.actions;
export const selectEvents = (state) => state.event;

export default eventSlice.reducer;