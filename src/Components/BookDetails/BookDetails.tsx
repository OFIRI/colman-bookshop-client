import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";

const BookDetails = () => {
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography paragraph textAlign={"center"}>
        <Typography paragraph textAlign={"center"} sx={{ fontWeight: "bold" }}>
          Title :
        </Typography>
        {book?.title}
      </Typography>
      <Typography paragraph textAlign={"center"}>
        <Typography paragraph textAlign={"center"} sx={{ fontWeight: "bold" }}>
          Author :
        </Typography>
        {book?.author}
      </Typography>
      <Typography paragraph textAlign={"center"}>
        <Typography paragraph textAlign={"center"} sx={{ fontWeight: "bold" }}>
          Description :
        </Typography>
        {book?.description}
      </Typography>
      <Typography paragraph textAlign={"center"}>
        <Typography paragraph textAlign={"center"} sx={{ fontWeight: "bold" }}>
          Price :
        </Typography>
        {book?.price}
      </Typography>
    </Container>
  );
};

export default BookDetails;
