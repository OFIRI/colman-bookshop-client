import { Box, Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Book } from "../types/Book";

const BookCard = (book: Book) => {
  return (
    <Container maxWidth="xl">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              {book.title}
            </Typography>
            <Typography
              component="div"
              color="text.secondary"
              variant="subtitle1"
            >
              By : {book.author}
            </Typography>
            <Typography component="div" color="green" variant="overline">
              ${book.price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default BookCard;
