import * as React from 'react';
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DialogSignUp from "./DialogSignUp";
import DialogLogIn from "./DialogLogIn";
import Button from "@mui/material/Button";
import cookie from 'cookie';
import {useEffect, useState} from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function UserMenu() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload()
    };

    async function getId () {
        try {
            const cookies = cookie.parse(document.cookie);
            const token = cookies.token;
            const decodedToken = jwt.decode(token);
            const id = decodedToken.id;
            const response = await axios.get(`/api/id?id=${id}`);
            console.log(id)
            return response.data.username;
        } catch (error) {
            console.log(error)
        }
    }
    const [myCookieValue, setMyCookieValue] = useState(undefined);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const cookies = cookie.parse(document.cookie);
            if (cookies.token) {
                setMyCookieValue(cookies.token);

                const fetchUsername = async () => {
                    const fetchedUsername = await getId();
                    setUsername(fetchedUsername);
                };

                fetchUsername();
            } else {
                setMyCookieValue(undefined);
            }

        }
    }, []);
    return (
        <div> {!myCookieValue ? (
            <Box sx={{flexGrow: 0}}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src=""/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem>
                        <DialogSignUp/>
                    </MenuItem>
                    <MenuItem>
                        <DialogLogIn/>
                    </MenuItem>
                </Menu>
            </Box>
            ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0}}>
                <span> Hello {username}, </span>
                <Button
                    key={myCookieValue}
                    onClick={handleLogout}
                    sx={{
                        ml: 1,
                        color: 'white',
                        display: 'block',
                        textTransform: 'none',
                    }}
                >
                    Log Out
                </Button>
            </Box>
            )}
        </div>
    )
}