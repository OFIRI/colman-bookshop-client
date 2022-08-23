import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { FC, ReactNode, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { SessionContextStore } from "../../contexts/SessionContext/SessionContext";
import './Register.css';


type RegisterProps = {
    children?: ReactNode
}

type RegisterForm = {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    repeat_password: string
}

const RegisterSchema = yup.object().shape({
    email: yup.string().required("Email is required!").email("Must be a valid email format"),
    first_name: yup.string().required("First name is required!"),
    last_name: yup.string().required("Last name is required!"),
    password: yup.string().required("Password is required!"),
    repeat_password: yup.string().required("Please repeat your password").oneOf([yup.ref("password"), null], "Passwords does not match!")
}).required()

const Register: FC<RegisterProps> = ({children}) =>{

    const {register, handleSubmit, formState: { errors }} = useForm<RegisterForm>({resolver: yupResolver(RegisterSchema)})
    const { signUp } = useContext(SessionContextStore);

    const onSubmit = async (form:RegisterForm) =>{
        await signUp({
            first_name: form.first_name,
            last_name: form.last_name,
            id: "",
            username: form.email,
            password: form.password,
            is_admin: false});
    }
    console.log(errors)

    return (
        <Grid container alignItems='center' justifyContent='center' className="register-container">
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper className="register-form-container" elevation={3}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField error={errors["email"] !== undefined} 
                                helperText={errors["email"] ? errors["email"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Email" {...register("email")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={errors["first_name"] !== undefined} 
                                helperText={errors["first_name"] ? errors["first_name"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="First Name" {...register("first_name")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={errors["last_name"] !== undefined} 
                                helperText={errors["last_name"] ? errors["last_name"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Last Name" {...register("last_name")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={errors["password"] !== undefined} 
                                helperText={errors["password"] ? errors["password"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Password" {...register("password")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField error={errors["repeat_password"] !== undefined} 
                                helperText={errors["repeat_password"] ? errors["repeat_password"].message?.toString() : ""} 
                                fullWidth 
                                variant="outlined" 
                                label="Repeat Password" {...register("repeat_password")}/>
                            </Grid>
                        </Grid>
                        <Button type="submit">Sign up</Button>
                    </Paper>
                </form>
            </Container>
        </Grid>
    )
}

export default Register;