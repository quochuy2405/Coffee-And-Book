import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function Login(props) {
    const {open, setOpen}=props;


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <form action="/" method="post">
      <Dialog open={open} onClose={handleClose} onBackdropClick>
    
        <DialogTitle className="d-flex justify-content-center color_orange "><h3>LOGIN</h3></DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Họ và tên"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="text"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  );
}