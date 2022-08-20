import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import AdminUsersView from "./AdminSections/AdminUsersView";


type AdminPageProps = {
    children?: ReactNode
}


const AdminPage: FC<AdminPageProps> = ({children}) =>{
    return (
      <Grid container>
        <Container>
          <Typography variant="h1">Admin Page</Typography>
        </Container>

        <Routes>
          <Route path={`users`} element={<AdminUsersView />} />
        </Routes>
      </Grid>
    );
}

export default AdminPage;