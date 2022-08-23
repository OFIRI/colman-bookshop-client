import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography paragraph>Title : </Typography>
      <Typography paragraph>Author : </Typography>
      <Typography paragraph>Title : </Typography>
      <Typography paragraph>Description : </Typography>
      <Typography paragraph>Price : </Typography>
    </Container>
  );
};

export default BookDetails;
