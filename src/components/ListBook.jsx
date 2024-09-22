import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../app/features/Book/BookSlice";

const ListBook = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  console.log(books);
  return (
    <div>
      {books && books?.length > 0 ? (
        <ul>
          {books?.map((book) => (
            <li>
              {book?.name} - ${book?.price} -{" "}
              <button onClick={() => handleDelete(book?.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default ListBook;
