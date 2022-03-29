import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// import login from '../../../images/login.png'

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate.push(redirect_url);
            })
    }


    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('Submit successfully')
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: '50px' }}>
                <Grid item sm={12} >
                    <Typography variant="body1" gutterBottom>
                        Login
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Email"
                                name="email"
                                onBlur={handleOnchange}
                                type="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnchange}
                                variant="standard" />
                            <Button
                                sx={{ width: '75%', m: 1 }}
                                type="submit"
                                variant="contained">Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">Are you New User? Please Register</Button></NavLink>
                        </form>

                    </Typography>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login Successfully!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>

            </Grid>


            <div className="login-form">

                <h3 className="my-5">Or Login with Google</h3>
                <button onClick={handleGoogleLogin} className="btn btn-success btn-outer-primary mb-5"><img src="https://img.icons8.com/color/96/000000/google-logo.png" alt="" /></button>

            </div>


        </Container>
    );
};

export default LogIn;