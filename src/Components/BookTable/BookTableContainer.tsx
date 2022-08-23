import { useEffect, useState } from "react";
import { useEffectOnce } from "../../hooks/useEffectOnce";
import { Book } from "../../types/Book";
import axios from "../../Utils/axios";
import CountMinSketch from "../CountMinSketch/CountMinSketch";
import SearchFilter from "../SearchBooks/SearchFilter";
import BookTable from "./BookTable";

const BookTableContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  // useEffectOnce(() => {
  //   const InitCmSketch = async () => {
  //     try {
  //       const response = await axios.post("/cmSketch/init");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   InitCmSketch();
  // });
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
