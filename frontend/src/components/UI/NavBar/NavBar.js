import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from './Menu/UserMenu';
import AnonymousMenu from './Menu/AnonymousMenu';

const NavBar = () => {
    // const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <Typography variant="h6">
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Image Gallery</Link>
                            </Typography>
                        </Grid>
                        {/* <Grid item>
                            {user ? (
                                <UserMenu user={user} />
                            ) : (
                                <AnonymousMenu />
                            )}
                        </Grid> */}
                        <AnonymousMenu />
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default NavBar;
