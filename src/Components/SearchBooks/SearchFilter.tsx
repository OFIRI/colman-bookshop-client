import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { number, object, string } from "yup";
import BookApi from "../../api/book.api";
import { Book } from "../../types/Book";

const schema = object().shape({
  title: string(),
  author: string(),
  price: number()
    .typeError("price must be a number")
    .min(0, "price cannot be a negative number "),
});
interface ISearchFilterProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}
const SearchFilter = ({ setBooks }: ISearchFilterProps) => {
  useEffect(() => {
    const getBooks = async () => {
      const temp = await BookApi.getAllBooks();
      setBooks(temp);
    };
    getBooks();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleSearch = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit(handleSearch)}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            margin={"2rem"}
          >
            <Grid item xs={3}>
              <TextField {...register("title")} id="title" label="title" />
            </Grid>
            <Grid item xs={3}>
              <TextField {...register("author")} id="author" label="author" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                {...register("price")}
                id="price"
                label="price"
                error={errors.price ? true : false}
                //@ts-ignore
                helperText={errors.price?.message}
              />
            </Grid>
            <Grid item xs={3}>
              <Button type="submit"> Search</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default SearchFilter;
