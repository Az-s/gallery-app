import React from 'react';
import { Button, CircularProgress } from "@mui/material";

const ProgressBtn = ({ children, loading, ...props }) => {
    return (
        <Button
            sx={{ position: 'relative' }}
            {...props}
        >
            {children}
            {loading && <CircularProgress size={20} color="inherit"
                sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px', }}
            />}
        </Button>
    )
}

export default ProgressBtn;