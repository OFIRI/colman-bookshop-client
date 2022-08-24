import { UserModel } from "../contexts/SessionContext/SessionContext";
import {Book} from "./Book"

export interface OrderModel {
    _id: string,
    user: UserModel,
    books: {
      book: Book,
      quantity: number
    }[],
    price: number
}