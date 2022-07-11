import React from "react";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";
import BookListPage from "../BookListPage/BookListPage";
import EditBookForm from "../EditBookForm/EditBookForm";

const HomePage = () => {
  const books: Book = {
    _id: "0",
    title: "test",
    author: "tets",
    description: "desc",
    price: 12,
    inventory: 5,
  };
  return (
    <>
      {/* <BookListPage /> */}
      <EditBookForm book={books} submitHandle={BookApi.editBook} />
    </>
  );
};

export default HomePage;
