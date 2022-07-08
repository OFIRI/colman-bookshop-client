import { Book } from "../../types/Book";
import BookCard from "../BookCard/BookCard";
import { Container } from "@mui/system";

const books: Book[] = [
  {
    _id: "0",
    title: "test",
    author: "tets",
    description: "desc",
    price: 12,
    inventory: 5,
  },
  {
    _id: "1",
    title: "test1",
    author: "tets111",
    description: "desc1",
    price: 121,
    inventory: 51,
  },
  {
    _id: "2",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "3",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "4",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "5",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "6",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "7",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "8",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "9",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
  {
    _id: "10",
    title: "testdcdc",
    author: "tetsdcdc",
    description: "descdcdc",
    price: 1233,
    inventory: 533,
  },
];

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
      {books.map((bookItem) => (
        <div key={bookItem._id}>
          <BookCard book={bookItem} key={bookItem._id} />
        </div>
      ))}
    </Container>
  );
};

export default BookListPage;
