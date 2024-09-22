import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../features/Book/BookSlice";

const store = configureStore({
  reducer: BookSlice,
});

export default store;
