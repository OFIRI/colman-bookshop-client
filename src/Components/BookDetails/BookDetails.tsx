import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Book } from "../../types/Book";

interface IProps {
  book: Book;
}
const BookDetails = ({ book }: IProps) => {
  <Container sx={{ display: "flex" }}>
    <Typography paragraph>Title : {book.title}</Typography>
  </Container>;
};

export default BookDetails;
