import { configureStore } from '@reduxjs/toolkit';
import eventReducer from "../features/event/EventSlice"

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});
