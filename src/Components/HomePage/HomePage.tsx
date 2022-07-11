import React from "react";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";
import BookListPage from "../BookListPage/BookListPage";
import BookForm from "../BookForm";

const HomePage = () => {
  return (
    <>
      {/* <BookListPage /> */}
      {/* <EditBookForm book={BookApi.books[0]} submitHandle={BookApi.editBook} /> */}
      <BookForm submitHandle={BookApi.createBook} />
    </>
  );
};

export default HomePage;
