import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "../../components/UI/GoogleLogin/GoogleLogin";
import { loginUser } from '../../store/actions/usersActions';
import ProgressBtn from '../../components/UI/ProgressBtn/ProgressBtn';
import { clearErrorUser } from '../../store/actions/usersActions';


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

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.loginError);
    const loading = useSelector(state => state.users.loginLoading);

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            dispatch(clearErrorUser());
        };
    }, [dispatch]);

    const inputChangeHandler = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ ...user }));
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
                            Sign in
                        </Typography>
                        {
                            error &&
                            <Alert severity="error" >
                                {error.message || error.global}
                            </Alert>
                        }
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
                            />

                            <ProgressBtn
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                loading={loading}
                                disabled={loading}
                            >
                                Sign In
                            </ProgressBtn>
                            <Grid item xs={12}>
                                <GoogleLogin />
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2" to="/register">
                                        {"Don't have an account? Sign Up"}
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

export default Login;