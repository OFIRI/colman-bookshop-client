import { Container } from "@mui/material";
import BookCard from "../BookCard/BookCard";
import { Book } from "../../types/Book";

interface IBookListProps {
  books: Book[];
}

const BookList = ({ books }: IBookListProps) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "start",
        flexWrap: "wrap",
      }}
    >
      {books ? (
        books.map((bookItem) => (
          <div key={bookItem._id}>
            <BookCard book={bookItem} key={bookItem._id} />
          </div>
        ))
      ) : (
        <div>Some error occured</div>
      )}
    </Container>
  );
};

export default BookList;
