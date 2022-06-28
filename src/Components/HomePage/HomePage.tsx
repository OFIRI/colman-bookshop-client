import React from "react";
import BookForm from "./BookForm";
import BookApi from "../../api/book.api";

const HomePage = () => {
  return (
    <div>
      <p>this is the home page</p>
      <BookForm submitHandle={BookApi.createBook}></BookForm>
    </div>
  );
};

export default HomePage;
