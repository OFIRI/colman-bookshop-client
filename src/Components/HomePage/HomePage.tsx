import React from "react";
import BookForm from "./BookForm";
import BookApi from "../../api/book.api";
import BookCard from "../BookCard";
import { Book } from "../../types/Book";

const books: Book[] = [
  {
    _id: "0",
    title: "test",
    author: "tets",
    description: "desc",
    price: 12,
    inventory: 5,
  },
  {
    _id: "1",
    title: "test1",
    author: "tets111",
    description: "desc1",
    price: 121,
    inventory: 51,
  },
  {
    _id: "2",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
];
const HomePage = () => {
  return (
    <div>
      <p>this is the home page</p>
      <BookCard></BookCard>
    </div>
  );
};

export default HomePage;
