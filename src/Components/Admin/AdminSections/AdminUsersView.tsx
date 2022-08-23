import { yupResolver } from "@hookform/resolvers/yup";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Checkbox, Container, Grid, IconButton, Paper, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UserModel } from "../../../contexts/SessionContext/SessionContext";
import { BASE_URL } from "../../../Utils/axios";


type AdminUsersViewProps = {
    children?: ReactNode
}


const AdminUsersView: FC<AdminUsersViewProps> = ({children}) =>{
  const [users, setUsers] = useState<UserModel[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { register: registerSearch, handleSubmit } = useForm();
  const {register, control, reset, getValues} = useForm({ defaultValues: {
    username: "",
    first_name: "",
    last_name: "",
    is_admin: false
  }})

  const fetchUsers = async () => {
    const {data} = await axios.get(BASE_URL + 'users');
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers()
  },[])

  const handleEdit = (user: UserModel) => {
    setSelectedUserId(user._id);
    const is_admin = !!user.is_admin;
    reset({username: user.username, first_name: user.first_name, last_name: user.last_name, is_admin: is_admin});
  }

  const onConfirm = async () => {
    const fields = getValues();
    const {data} = await axios.put(BASE_URL + 'users', {id: selectedUserId, ...fields});
    setSelectedUserId(null);
    fetchUsers()
  }

  const onSearch = async (data: any) => {
    const {first_name, last_name, username} = data;
    const {data: users} = await axios.get(BASE_URL + `users/search/?username=${username}&first_name=${first_name}&last_name=${last_name}`);
    setUsers(users);
  }

    return (
      <Container maxWidth="xl">
        <form onSubmit={handleSubmit(onSearch)}>
          <Grid container>  
              <Grid item><TextField placeholder="username" {...registerSearch("username")}/></Grid>
              <Grid item><TextField placeholder="First name" {...registerSearch("first_name")}/></Grid>
              <Grid item><TextField placeholder="Last name" {...registerSearch("last_name")}/></Grid>
              <Grid item><Button type="submit">Search</Button></Grid>
          </Grid>
        </form>
      <Grid container>
            <Grid container alignItems="center" justifyContent="center" spacing={3}>
                  <Grid item xs={2}>Id number</Grid>
                  <Grid item xs={2}><Typography variant="body1" className="bold">Username</Typography></Grid>
                  <Grid item xs={2}><Typography variant="body1" className="bold">First name</Typography></Grid>
                  <Grid item xs={1}><Typography variant="body1" className="bold">Last name</Typography></Grid>
                  <Grid item xs={1}><Typography variant="body1" className="bold">Password</Typography></Grid>
                  <Grid item xs={1}><Typography variant="body1" className="bold">Administrator</Typography></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
            </Grid>
          {users.map(user => (<Grid key={user._id} container alignItems="center" justifyContent="center" spacing={3}>
            { selectedUserId !== user._id ? <>
            <Grid item xs={2}>{user._id}</Grid>
            <Grid item xs={2}>{user.username}</Grid>
            <Grid item xs={2}>{user.first_name}</Grid>
            <Grid item xs={1}>{user.last_name}</Grid>
            <Grid item xs={1} className="blurred-text">{user.password}</Grid>
            <Grid item xs={1}>{user.is_admin ? "True" : "False"}</Grid>
            <Grid item xs={1}><IconButton onClick={() => handleEdit(user)}><Edit/></IconButton></Grid>
            <Grid item xs={1}><IconButton><Delete/></IconButton></Grid>
            </> : 
            <>
            <Grid item xs={2}>{user._id}</Grid>
            <Grid item xs={2}><TextField {...register("username")}/></Grid>
            <Grid item xs={2}><TextField {...register("first_name")}/></Grid>
            <Grid item xs={1}><TextField {...register("last_name")}/></Grid>
            <Grid item xs={1}><Controller
                name="is_admin"
                control={control}
                render={({ field: { value, ...props}  }) => {
                  return <Checkbox checked={value} {...props} />
                }}
                /></Grid>
            <Grid item xs={1}><Button onClick={onConfirm}>Confirm</Button><Button onClick={() => setSelectedUserId(null)} color="warning">Cancel</Button></Grid>
            <Grid item xs={1}><IconButton><Delete/></IconButton></Grid>
            </>}
          </Grid>))}
      </Grid>
      </Container>
    );
}

export default AdminUsersView;