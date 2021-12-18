import React , {useState} from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import {useDispatch} from "react-redux";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                Hello, {user.displayName}!
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                {/* <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem> */}
            </Menu>
        </>
    )
}

export default UserMenu;