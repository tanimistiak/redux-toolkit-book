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
  reducers: {
    deleteBook: (state, actions) => {
      state.books = state.books.filter((book) => book.id !== actions.payload);
    },
    createBook: (state, action) => {
      //   console.log(action.payload);
      const newBook = [...state.books, action.payload];
      state.books = newBook;
      //   state.books = newBook;
      //   state.books = state.books.push(action.payload);
    },
  },
});
export const { deleteBook, createBook } = bookSlice.actions;
export default bookSlice.reducer;
