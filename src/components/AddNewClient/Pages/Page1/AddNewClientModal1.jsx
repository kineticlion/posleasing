import React from "react";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import { IoCloseCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AddNewClientPage1 from "./AddNewClientPage1";

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
  width: "90vw",
  maxHeight: "100%",
  overflow: "auto",
  height: "80vh",
 },
}));

const AddNewClientModal = ({ open, setOpen, next }) => {
 const classes = useStyles();

 const handleClose = () => {
  setOpen(false);
 };

 const handleNext = () => {
  next(true);
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
     <div className='d-flex justify-content-between'>
      <h2 className='align-self-center' style={{ fontSize: "5vmin" }}>
       Add New Client
      </h2>
      <IconButton className='ml-5 mb-2' onClick={handleClose} style={{ outline: 0 }}>
       <IoCloseCircleOutline size='6vmin' />
      </IconButton>
     </div>

     <AddNewClientPage1 onClose={handleClose} />

     <div className='d-flex justify-content-end'>
      <IconButton onClick={handleNext} style={{ outline: 0 }}>
       <IoChevronForwardCircleOutline size='6vmin' />
      </IconButton>
     </div>
    </div>
   </Fade>
  </Modal>
 );
};

export default AddNewClientModal;
