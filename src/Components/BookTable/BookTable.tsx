import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Book } from "../../types/Book";
import BookRow from "./BookRow";

interface IBookTableProps {
  books: Book[];
  handleDelete: Function;
}
const BookTable = ({ books, handleDelete }: IBookTableProps) => {
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
        {books &&
          books.map((book) => (
            <BookRow
              book={book}
              key={book._id}
              removeBook={(oldBook: Book) => handleDelete(oldBook)}
            />
          ))}
      </TableBody>
    </Table>
  );
};

export default BookTable;
