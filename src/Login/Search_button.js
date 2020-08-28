import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from './Login_page';
import './Login_button.css';
import Search_ID from './Search_ID';

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
            <a onClick={handleClickOpen} style={{marginLeft:'40px',marginRight:'30px',textDecoration: 'none', cursor:'pointer'}}> ID/비밀번호 찾기 </a>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="height_login_button"
            >
                <Search_ID />


                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        닫기
          </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}