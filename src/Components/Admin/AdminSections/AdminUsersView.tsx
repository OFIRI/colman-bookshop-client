import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Route } from "react-router-dom";


type AdminUsersViewProps = {
    children?: ReactNode
}


const AdminUsersView: FC<AdminUsersViewProps> = ({children}) =>{

    return (
      <Grid container>
        <Container>
          <Typography variant="h1">Users</Typography>
        </Container>
      </Grid>
    );
}

export default AdminUsersView;