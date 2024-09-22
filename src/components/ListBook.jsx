import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../app/features/Book/BookSlice";
import EditBook from "./EditBook";

const ListBook = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const [edit, setEdit] = useState(false);
  const [editBook, setEditBook] = useState();
  const handleEdit = (book) => {
    setEditBook(book);
  };
  return (
    <div>
      {books && books?.length > 0 ? (
        <ul>
          {books?.map((book) => (
            <li>
              {book?.name} - ${book?.price} -{" "}
              <button onClick={() => handleDelete(book?.id)}>Delete</button>
              <button
                onClick={() => {
                  setEdit(true);
                  handleEdit(book);
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
      {edit && <EditBook editBook={editBook} setEditBook={setEditBook} />}
    </div>
  );
};

export default ListBook;
