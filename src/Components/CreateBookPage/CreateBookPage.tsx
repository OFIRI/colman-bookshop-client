import { Box, Typography } from "@mui/material";
import BookApi from "../../api/book.api";
import BookForm from "../BookForm";

const CreateBookPage = () => {
  return (
    <>
      <Typography component="h1" variant="h5">
        <Box sx={{ textAlign: "center", margin: "1rem" }}>Add New Book</Box>
      </Typography>

      <BookForm submitHandle={BookApi.createBook} />
    </>
  );
};

export default CreateBookPage;
