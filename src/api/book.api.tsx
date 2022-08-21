import { Book } from "../types/Book";
import axios from "../Utils/axios";
class BookApi {
  static async getAllBooks(): Promise<Book[]> {
    try {
      const response = await axios.get("books/");
      const books = response.data;
      return books;
    } catch (error) {
      throw error;
    }
  }
  static async getBook(id: string): Promise<Book> {
    try {
      const response = await axios.get("books/" + id);
      const book: Book = response.data;
      return book;
    } catch (error) {
      throw error;
    }
  }
  static async createBook(book: Book): Promise<Book> {
    try {
      const response = await axios.post("/books", book);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async editBook(book: Book): Promise<Book> {
    try {
      const response = await axios.put("/books/" + book._id, book);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  static async deleteBook(id: string): Promise<string> {
    try {
      const response = await axios.delete("/books/" + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default BookApi;
