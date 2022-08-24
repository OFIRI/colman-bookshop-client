import { IconButton, TableCell, TableRow } from "@mui/material";
import { authorPrice } from "../../types/AuthorPrice";

interface IAuthorRowProps {
  data: authorPrice;
}

const AuthorPriceRow = ({ data }: IAuthorRowProps) => {
  return (
    <TableRow key={data._id}>
      <TableCell align="center">{data._id}</TableCell>
      <TableCell align="center">{data.avgPrice}</TableCell>
    </TableRow>
  );
};

export default AuthorPriceRow;
