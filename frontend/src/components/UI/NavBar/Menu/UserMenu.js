import React , {useState} from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {logoutUser} from '../../../../store/actions/usersActions';

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
                Hello, <Link to="/my_photos" style={{ color: '#fff', textDecoration: 'none' }}>{user.name}!</Link>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/my_photos' style={{ color: '#fff', textDecoration: 'none' }}>My photos</MenuItem>
                <MenuItem component={Link} to='/add_photo' style={{ color: '#fff', textDecoration: 'none' }}>Add photo</MenuItem>
                <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default UserMenu;