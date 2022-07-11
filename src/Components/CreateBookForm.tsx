import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, mixed } from "yup";
import { Book } from "../types/Book";

const schema = object().shape({
  title: string().required("Title is required"),
  author: string().required("Author is required"),
  description: string().required("Description is required"),
  price: number()
    .typeError("Price must be a number")
    .required("Book must have a price")
    .min(0, "Price can't be negative"),
  inventory: number()
    .typeError("Inventory must be a number")
    .required("Book must have Inventory")
    .min(0, "Inventory can't be negative"),
});

interface IBookFormProps {
  submitHandle: SubmitHandler<Book>;
}
const BookForm = ({ submitHandle }: IBookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div>
      <Container maxWidth="xs">
        {/* @ts-ignore */}
        <form onSubmit={handleSubmit(submitHandle)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Add New Book
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("title")}
                id="title"
                label="title"
                fullWidth
                error={errors.title ? true : false}
                // @ts-ignore
                helperText={errors.title?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("description")}
                id="description"
                label="description"
                multiline
                rows={6}
                error={errors.description ? true : false}
                // @ts-ignore
                helperText={errors.description?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("author")}
                id="author"
                label="author"
                fullWidth
                error={errors.author ? true : false}
                // @ts-ignore
                helperText={errors.author?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("price")}
                id="price"
                label="price"
                fullWidth
                error={errors.price ? true : false}
                // @ts-ignore
                helperText={errors.price?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("inventory")}
                id="inventory"
                label="inventory"
                fullWidth
                error={errors.inventory ? true : false}
                // @ts-ignore
                helperText={errors.inventory?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
export default BookForm;
