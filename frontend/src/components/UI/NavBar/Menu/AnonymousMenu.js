import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const AnonymousMenu = () => {
    return (
        <>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Button component={Link} to="/register" color="inherit">Sign up</Button>
                <Button component={Link} to="/login" color="inherit">Sign in</Button>
            </Stack>
        </>
    )
}

export default AnonymousMenu;