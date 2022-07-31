import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";


type AdminPageProps = {
    children?: ReactNode
}


const AdminPage: FC<AdminPageProps> = ({children}) =>{

    return (
        <Grid container>
            <Container>
                <Typography variant="h1">Admin Page</Typography>
            </Container>
        </Grid>
    )
}

export default AdminPage;