import React, { useState } from "react";

const CreateBook = () => {
  const [book, setBook] = useState({
    name: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default CreateBook;
