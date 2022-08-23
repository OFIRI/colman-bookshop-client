import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { UserModel } from "../../../contexts/SessionContext/SessionContext";
import { BASE_URL } from "../../../Utils/axios";


type AdminUsersViewProps = {
    children?: ReactNode
}


const AdminUsersView: FC<AdminUsersViewProps> = ({children}) =>{
  const [users, setUsers] = useState<UserModel[]>([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const {data} = await axios.get(BASE_URL + 'users');
      setUsers(data);
    }

    fetchBooks()
  },[])

    return (
      <Grid container>
          {users.map(user => <Grid container spacing={3}>
            <Grid item xs={2}>{user._id}</Grid>
            <Grid item xs={2}>{user.username}</Grid>
            <Grid item xs={2}>{user.first_name}</Grid>
            <Grid item xs={2}>{user.last_name}</Grid>
            <Grid item xs={2}>{user.is_admin ? "True" : "False"}</Grid>
            <Grid item xs={2}>{user.first_name}</Grid>
          </Grid>)}
      </Grid>
    );
}

export default AdminUsersView;