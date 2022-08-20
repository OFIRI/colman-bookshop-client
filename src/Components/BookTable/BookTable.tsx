import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";
import BookRow from "./BookRow";

const BookTable = () => {
  const [books, setBooks] = useState<Book[]>();
  useEffect(() => {
    const getBooks = async () => {
      const data = await BookApi.getAllBooks();
      setBooks(data);
    };
    getBooks();
  }, []);
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align="center">id</TableCell>
          <TableCell align="center">Title</TableCell>
          <TableCell align="center">Author</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Inventory</TableCell>
          <TableCell align="center">See more</TableCell>
          <TableCell align="center">Edit Book</TableCell>
          <TableCell align="center">Delete Book</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {books && books.map((book) => <BookRow book={book} key={book._id} />)}
      </TableBody>
    </Table>
  );
};

export default BookTable;
