import { Book } from "../../types/Book";
import { useState } from "react";
import SearchFilter from "../SearchBooks/SearchFilter";
import BookList from "./BookList";

const BookListPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <>
      <SearchFilter setBooks={setBooks} />
      <BookList books={books} />
    </>
  );
};

export default BookListPage;
