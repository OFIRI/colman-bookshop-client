import { useState } from "react";
import { Book } from "../../types/Book";
import SearchFilter from "../SearchBooks/SearchFilter";
import BookTable from "./BookTable";

const BookTableContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const handleDelete = (oldBook: Book) => {
    if (books) {
      const tempBooks = [...books];
      const bookArray = tempBooks.filter((book) => book._id != oldBook._id);
      setBooks(bookArray);
    }
  };
  return (
    <>
      <SearchFilter setBooks={setBooks} />
      <BookTable books={books} handleDelete={handleDelete} />
    </>
  );
};
export default BookTableContainer;
