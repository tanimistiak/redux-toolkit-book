import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [
      {
        id: 1,
        name: "X",
        price: 35,
      },
      {
        id: 2,
        name: "Y",
        price: 35,
      },
      {
        id: 3,
        name: "Z",
        price: 60,
      },
    ],
  },
  reducers: {},
});

export default bookSlice.reducer;
