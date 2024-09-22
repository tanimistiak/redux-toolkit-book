import React from "react";
import { useSelector } from "react-redux";

const ListBook = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books && books?.length > 0 ? (
        <ul>
          {books?.map((book) => (
            <li>
              {book?.name} - ${book?.price}
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
