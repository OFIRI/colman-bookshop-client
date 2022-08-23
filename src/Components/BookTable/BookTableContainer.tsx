import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useEffectOnce } from "../../hooks/useEffectOnce";
import { Book } from "../../types/Book";
import { BASE_URL } from "../../Utils/axios";
import { UserChart } from "../Admin/UserChart";
import SearchFilter from "../SearchBooks/SearchFilter";
import BookTable from "./BookTable";

const BookTableContainer = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [data, setData] = useState<any>(null);
  const handleDelete = (oldBook: Book) => {
    if (books) {
      const tempBooks = [...books];
      const bookArray = tempBooks.filter((book) => book._id != oldBook._id);
      setBooks(bookArray);
    }
  };

  useEffectOnce(() => {
    const InitCmSketch = async () => {
      try {
        await axios.post(BASE_URL + "cmSketch/init");
        const {data: cmData} = await axios.get(BASE_URL + "cmSketch/getAllCounts");
        const top =[];
        for (let j = 0; j < 5; j++) {
          let max = { count: 0}
          let i = 0;
          for (let index = 0; index < cmData.length; index++) {
            if (cmData[index].count > max.count) {
              i = index;
              max = cmData[index];
            }
          }
          top.push(cmData[i])
          cmData.splice(i, 1);
        }
        setData(top);
      } catch (error) {
        console.log(error);
      }
    };
    InitCmSketch();
  });

  return (
    <>
      <SearchFilter setBooks={setBooks} />
      <Grid container item xs={2} sm={2} md={2} lg={1} xl={1}>
        <UserChart dataset={data}/>
      </Grid>
      <BookTable books={books} handleDelete={handleDelete} />
    </>
  );
};
export default BookTableContainer;
