import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../app/features/Book/BookSlice";

const CreateBook = () => {
  const [book, setBook] = useState({
    name: "",
    price: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setBook((prevBook) => ({ ...prevBook, [name]: value, id: 11 }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(book));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="book name"
          name="name"
          value={book.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="book price"
          name="price"
          value={book.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
