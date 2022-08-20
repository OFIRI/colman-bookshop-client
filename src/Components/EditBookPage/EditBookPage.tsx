import { Box, Typography } from "@mui/material";
import BookForm from "../BookForm";
import BookApi from "../../api/book.api";
import { useParams } from "react-router-dom";

const EditBookPage = () => {
  const { id } = useParams();
  const bookItem = BookApi.books.filter((bookItem) => {
    return bookItem._id === id;
  });
  return (
    <>
      <Typography component="h1" variant="h5">
        <Box sx={{ textAlign: "center", margin: "1rem" }}>Edit Book</Box>
      </Typography>

      <BookForm submitHandle={BookApi.editBook} book={bookItem[0]} />
    </>
  );
};

export default EditBookPage;
