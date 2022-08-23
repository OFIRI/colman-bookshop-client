import { IconButton, TableCell, TableRow } from "@mui/material";
import { Book } from "../../types/Book";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import BookApi from "../../api/book.api";

interface IBookRowProps {
  book: Book;
}

const BookRow = ({ book }: IBookRowProps) => {
  const navigate = useNavigate();
  const handleDetails = (bookId: string) => {
    navigate(`/BookDetails/${bookId}`);
  };
  const handleEdit = (bookId: string) => {
    navigate(`/EditBook/${bookId}`);
  };
  return (
    <TableRow>
      <TableCell align="center">{book._id}</TableCell>
      <TableCell align="center">{book.title}</TableCell>
      <TableCell align="center">{book.author}</TableCell>
      <TableCell align="center">{book.price}</TableCell>
      <TableCell align="center">{book.inventory}</TableCell>
      <TableCell align="center">
        <IconButton onClick={() => handleDetails(book._id)}>
          <Add />
        </IconButton>
      </TableCell>
      <TableCell align="center" onClick={() => handleEdit(book._id)}>
        <IconButton>
          <Edit />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={() => BookApi.deleteBook(book._id)}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default BookRow;
