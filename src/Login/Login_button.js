import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Login_page';
import './Login_button.css';

export default function Login_button() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  

    return (
        <div>
            <a onClick={handleClickOpen} className="asdf"> 로그인 </a>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="height_login_button"
            >
                <Login />


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        닫기
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}