import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "../../Utils/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const schema = object().shape({
  bookId: string(),
});
const CountMinSketch = () => {
  const [count, setCount] = useState<string>();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const getBookCount = async (bookId: any) => {
    try {
      const response = await axios.get("/cmSketch/getAllCounts");
      console.log(response.data);
      //setCount(response.data);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit(getBookCount)}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          margin={"2rem"}
        >
          <Grid item xs={6}>
            <TextField {...register("id")} id="id" label="bookId" />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit">View book count</Button>
          </Grid>
        </Grid>
      </form>
      <Typography alignContent="center">
        {" "}
        The count according to count min sketch {count}
      </Typography>
    </Container>
  );
};

export default CountMinSketch;
