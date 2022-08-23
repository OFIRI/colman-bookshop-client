import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Route } from "react-router-dom";


type AdminOrdersViewProps = {
    children?: ReactNode
}


const AdminOrdersView: FC<AdminOrdersViewProps> = ({children}) =>{

    return (
      <Grid container>
        <Container>
          <Typography variant="h1">Orders</Typography>
        </Container>
      </Grid>
    );
}

export default AdminOrdersView;