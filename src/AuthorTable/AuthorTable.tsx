import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { authorGroupBy } from "../types/AuthorGroupBy";
import axios from "../Utils/axios";
import AuthorRow from "./AuthorRow";

const AuthorTable = () => {
  const [data, setData] = useState<authorGroupBy[]>([]);
  useEffect(() => {
    const getGroup = async () => {
      try {
        const result = await axios.get("/books/count/author");
        setData(result.data);
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
          <TableCell align="center">Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.map((element) => <AuthorRow data={element} />)}
      </TableBody>
    </Table>
  );
};

export default AuthorTable;
