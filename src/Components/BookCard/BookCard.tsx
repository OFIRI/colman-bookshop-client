import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Book } from "../../types/Book";

interface IProps {
  book: Book;
}
const BookCard = ({ book }: IProps) => {
  const navigate = useNavigate();
  const toDetailScreen = (bookId: string) => {
    navigate(`/BookDetails/${bookId}`);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0.5rem",
          margin: "2rem",
        }}
      >
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
            <Button
              onClick={() => {
                toDetailScreen(book._id);
              }}
            >
              Details
            </Button>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default BookCard;
