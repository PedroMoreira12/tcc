import axios from 'axios'
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import { useState } from 'react';


export default function DialogSignUp() {
    const [open, setOpen] = React.useState(false);
    const nameRef = React.useRef(null);
    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const [formErrors, setFormErrors] = useState({
        name: '',
        username: '',
        password: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validateForm = () => {
        const errors = {
            name: '',
            username: '',
            password: '',
        };
        let isValid = true;

        if (!nameRef.current.value.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!usernameRef.current.value.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        }

        if (passwordRef.current.value.trim().length < 8) {
            errors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        setFormErrors(errors);

        return isValid;
    };

    async function submitForm (event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const name = nameRef.current.value;
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            const response = await axios.post('/api/', {name, username, password})
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
        handleClose()
        window.location.reload();


    }
    return (
        <>
            <div onClick={handleClickOpen}>
                Sign Up
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            margin="dense"
                            id="name-input"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            inputRef={nameRef}
                            error={!!formErrors.name}
                            helperText={formErrors.name}
                        />
                        <TextField
                            margin="dense"
                            id="username-input"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            inputRef={usernameRef}
                            error={!!formErrors.username}
                            helperText={formErrors.username}
                        />
                        <TextField
                            margin="dense"
                            id="password-input"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            inputRef={passwordRef}
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitForm}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}