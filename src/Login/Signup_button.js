import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Login_page';
import './Login_button.css';
import Signup_page from './Signup_page';

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
            <a onClick={handleClickOpen} style={{marginLeft:'40px',textDecoration: 'none', cursor:'pointer'}}> 회원가입 </a>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="height_login_button"
            >
                <Signup_page />


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        닫기
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}