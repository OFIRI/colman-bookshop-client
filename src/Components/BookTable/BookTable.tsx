import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import BookApi from "../../api/book.api";
import BookRow from "./BookRow";

const BookTable = () => {
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
        {BookApi.books.map((book) => (
          <BookRow book={book} key={book._id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default BookTable;
