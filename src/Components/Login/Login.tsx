import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { FC, ReactNode, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import SessionContext, { SessionContextStore } from "../../contexts/SessionContext/SessionContext";
import { BASE_URL } from "../../Utils/axios";
import './Login.css';


type LoginProps = {
    children?: ReactNode
}

type LoginForm = {
    email: string,
    password: string,
}

const LoginSchema = yup.object().shape({
    email: yup.string().required("Email is required!").email("Must be a valid email format"),
    password: yup.string().required("Password is required!")
}).required()

const Login: FC<LoginProps> = ({children}) =>{

    const {register, handleSubmit, formState: { errors }} = useForm<LoginForm>({resolver: yupResolver(LoginSchema)})
    const {login} = useContext(SessionContextStore);

    const onSubmit = async (form:LoginForm) =>{
        const { password, email} = form;
        await login({password, username: email});
    }

    return (
        <Grid container alignItems='center' justifyContent='center' className="login-container">
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper className="login-form-container" elevation={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField error={errors["email"] !== undefined} 
                                helperText={errors["email"] ? errors["email"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Email" {...register("email")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={errors["password"] !== undefined} 
                                helperText={errors["password"] ? errors["password"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Password" {...register("password")}/>
                            </Grid>
                        </Grid>
                        <Button type="submit">Log in</Button>
                    </Paper>
                </form>
            </Container>
        </Grid>
    )
}

export default Login;