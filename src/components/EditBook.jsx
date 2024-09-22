import React from "react";
import { useDispatch } from "react-redux";
import { editBookR } from "../app/features/Book/BookSlice";

const EditBook = ({ editBook, setEditBook }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBook((prevBook) => ({ ...prevBook, [name]: value }));
  };
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editBookR(editBook));
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="name"
          value={editBook.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={editBook.price}
          onChange={handleChange}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditBook;
