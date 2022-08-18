import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";
import { Container } from "@mui/system";
import BookApi from "../../api/book.api";
import { useEffect, useState } from "react";

const BookListPage = () => {
  const [books, setBooks] = useState<Book[]>();
  useEffect(() => {
    const getBooks = async () => {
      const temp = await BookApi.getAllBooks();
      console.log(temp);
    };
    getBooks();
  }, []);
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
