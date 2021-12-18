import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
import { Paper, Grid, Box, Typography, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../../store/actions/usersActions';
import ProgressBtn from '../../components/UI/ProgressBtn/ProgressBtn';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const theme = createTheme();

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);
    const loading = useSelector(state => state.users.registerLoading);

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const inputChangeHandler = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const getFieldError = fieldName => {
        try {
            return error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ ...user }));
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="text"
                                label="Username"
                                name="username"
                                autoComplete="new-username"
                                autoFocus
                                onChange={inputChangeHandler}
                                error={getFieldError('username')}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="new-password"
                                onChange={inputChangeHandler}
                                error={getFieldError('password')}
                            />
                            <ProgressBtn
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                loading={loading}
                                disabled={loading}
                            >
                                Sign Up
                            </ProgressBtn>
                            <Grid container>
                                <Grid item >
                                    <Link href="#" variant="body2" to="/login" >
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Register;