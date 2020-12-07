import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { IoChevronBackCircleOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddNewClientPage3 from "./AddNewClientPage3";

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

const AddNewClientModal = ({ open, setOpen1, setOpen2, setOpen3 }) => {
 const classes = useStyles();
 const handleSave = () => {
  setOpen1(false);
  setOpen2(false);
  setOpen3(false);
 };

 const handlePrevious = () => {
  setOpen3(false);
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
       New Client - Confirmation
      </h2>
      <IconButton className='ml-5 mb-2' onClick={handlePrevious} style={{ outline: 0 }}>
       <IoChevronBackCircleOutline size='6vmin' />
      </IconButton>
     </div>
     <AddNewClientPage3 />

     <div className='d-flex justify-content-end'>
      <IconButton onClick={handleSave} style={{ outline: 0 }}>
       <IoCheckmarkCircleOutline size='6vmin' />
      </IconButton>
     </div>
    </div>
   </Fade>
  </Modal>
 );
};

export default AddNewClientModal;
