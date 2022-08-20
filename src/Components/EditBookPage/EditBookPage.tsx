import { Box, Typography } from "@mui/material";
import BookForm from "../BookForm";
import BookApi from "../../api/book.api";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Book } from "../../types/Book";

const EditBookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book>();
  useEffect(() => {
    const getBook = async (id: string) => {
      const data = await BookApi.getBook(id);
      setBook(data);
    };
    if (id) getBook(id);
  }, []);
  return (
    <>
      <Typography component="h1" variant="h5">
        <Box sx={{ textAlign: "center", margin: "1rem" }}>Edit Book</Box>
      </Typography>
      {book ? (
        <BookForm submitHandle={BookApi.editBook} book={book} />
      ) : (
        <div>ERROR</div>
      )}
    </>
  );
};

export default EditBookPage;
