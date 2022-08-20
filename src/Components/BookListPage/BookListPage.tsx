import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";
import { Container } from "@mui/system";
import BookApi from "../../api/book.api";
import { useEffect, useState } from "react";

const BookListPage = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [books, setBooks] = useState<Book[]>();

  const TitleInputHandler = (event: any) => {
    setTitle(event?.target?.value);
  };
  const AuthorInputHandler = (event: any) => {
    setAuthor(event?.target?.value);
  };
  const PriceInputHandler = (event: any) => {
    setPrice(event?.target?.value);
  };
  useEffect(() => {
    const getBooks = async () => {
      const temp = await BookApi.getAllBooks();
      setBooks(temp);
    };
    getBooks();
  }, []);
  return (
    <>
      <input
        id="title"
        placeholder="Title"
        type="text"
        onChange={TitleInputHandler}
      ></input>
      <input
        id="author"
        placeholder="Author"
        type="text"
        onChange={AuthorInputHandler}
      ></input>
      <input
        id="price"
        placeholder="Price"
        type="number"
        onChange={PriceInputHandler}
      ></input>
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
    </>
  );
};

export default BookListPage;
