import { Book } from "../types/Book";
import axios from "../Utils/axios";
class BookApi {
  static books: Book[] = [
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
  static async getAllBooks(): Promise<Book[]> {
    try {
      const response = await axios.get("books/");
      const books = response.data;
      return books;
    } catch (error) {
      throw error;
    }
  }
  static async createBook(book: Book): Promise<Book> {
    console.log("this the create ", book);
    return book;
  }
  static async editBook(book: Book): Promise<Book> {
    console.log("this is the edit ", book);
    return book;
  }
  static async deleteBook(id: string) {
    console.log("this is the delete ", id);
  }
}
export default BookApi;
