import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { IoAddCircleOutline, IoChevronForwardCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
 modal: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 },
 paper: {
  backgroundColor: theme.palette.background.paper,
  border: "2px solid #000",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
 },
}));

const AddNewClient = ({ open, setOpen }) => {
 const classes = useStyles();

 const handleClose = () => {
  setOpen(false);
 };

 return (
  <Modal
   disableEnforceFocus
   aria-labelledby='transition-modal-title'
   aria-describedby='transition-modal-description'
   className={classes.modal}
   open={open}
   closeAfterTransition
   BackdropComponent={Backdrop}
   BackdropProps={{
    timeout: 900,
   }}>
   <Fade in={open}>
    <div className={classes.paper}>
     <h2 style={{ fontSize: "5vmin" }}>
      Add New Client
      <IconButton className='ml-5 mb-2' onClick={handleClose} style={{ outline: 0 }}>
       <IoCloseCircleOutline size='6vmin' />
      </IconButton>
     </h2>

     <p id='transition-modal-description'>New Client Body</p>

     <div className='d-flex justify-content-end'>
      <IconButton onClick={handleClose} style={{ outline: 0 }}>
       <IoChevronForwardCircleOutline size='6vmin' />
      </IconButton>
     </div>
    </div>
   </Fade>
  </Modal>
 );
};

export default AddNewClient;
