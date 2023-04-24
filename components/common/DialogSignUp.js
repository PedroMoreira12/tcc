import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";


export default function DialogSignUp() {
    const [open, setOpen] = React.useState(false);
    const nameRef = React.useRef(null);
    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitForm = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log('name:', name);
        console.log('username:', username);
        console.log('password:', password);

    }
    return (
        <>
            <div onClick={handleClickOpen}>
                Sign Up
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name-input"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={nameRef}
                    />
                    <TextField
                        margin="dense"
                        id="username-input"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={usernameRef}
                    />
                    <TextField
                        margin="dense"
                        id="password-input"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        inputRef={passwordRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitForm}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}