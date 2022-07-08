import { Book } from "../types/Book";
class BookApi {
  static async createBook(book: Book): Promise<Book> {
    console.log(book);
    return book;
  }
}
export default BookApi;
