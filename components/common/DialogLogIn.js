import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import axios from "axios";

export default function DialogLogIn() {
    const [open, setOpen] = React.useState(false);
    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function submitForm (event) {
        event.preventDefault();
        try {
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            const response = await axios.post('/api/login', {username, password})
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
                Log In
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Log In</DialogTitle>
                <DialogContent>
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
                    <Button onClick={submitForm}>Log In</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}