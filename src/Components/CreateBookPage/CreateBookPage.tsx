import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";
import BookForm from "../BookForm";

const CreateBookPage = () => {
  const navigate = useNavigate();
  const createBookFunc = async (book: Book) => {
    try {
      const response = await BookApi.createBook(book);
      navigate(`/BooksTable`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        <Box sx={{ textAlign: "center", margin: "1rem" }}>Add New Book</Box>
      </Typography>

      <BookForm submitHandle={createBookFunc} />
    </>
  );
};

export default CreateBookPage;
