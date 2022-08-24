import { IconButton, TableCell, TableRow } from "@mui/material";
import { authorGroupBy } from "../../types/AuthorGroupBy";

interface IAuthorRowProps {
  data: authorGroupBy;
}

const AuthorRow = ({ data }: IAuthorRowProps) => {
  return (
    <TableRow key={data._id}>
      <TableCell align="center">{data._id}</TableCell>
      <TableCell align="center">{data.count}</TableCell>
    </TableRow>
  );
};

export default AuthorRow;
