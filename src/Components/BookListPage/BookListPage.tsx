import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";
import { Container } from "@mui/system";
import BookApi from "../../api/book.api";

const BookListPage = () => {
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
      {BookApi.books.map((bookItem) => (
        <div key={bookItem._id}>
          <BookCard book={bookItem} key={bookItem._id} />
        </div>
      ))}
    </Container>
  );
};

export default BookListPage;
