import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Utils/axios";

const BookListPage = () => {
  
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const {data} = await axios.get(BASE_URL + 'books');
      setBooks(data);
    }

    fetchBooks()
  },[])

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
      {books.map((bookItem) => (
        <div key={bookItem._id}>
          <BookCard book={bookItem} key={bookItem._id} />
        </div>
      ))}
    </Container>
  );
};

export default BookListPage;
