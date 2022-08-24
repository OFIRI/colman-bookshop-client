import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { authorPrice } from "../../types/AuthorPrice";
import axios from "../../Utils/axios";
import AuthorPriceRow from "./AuthoPriceRow";

const AuthorByPriceTable = () => {
  const [data, setData] = useState<authorPrice[]>([]);
  useEffect(() => {
    const getGroup = async () => {
      try {
        const res = await axios.get("books/author/price");
        setData(res.data);
      } catch (error) {
        throw error;
      }
    };
    getGroup();
  }, []);
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align="center">Author</TableCell>
          <TableCell align="center">Avg price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.map((element) => <AuthorPriceRow data={element} />)}
      </TableBody>
    </Table>
  );
};

export default AuthorByPriceTable;
