import React from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";

const AddNewClientBody = ({ onClose }) => {
 const handleNext = () => {
  console.log("Next");
  onClose();
 };
 return (
  <>
   <h1>BODY</h1>
   <div className='d-flex justify-content-end'>
    <IconButton onClick={handleNext} style={{ outline: 0 }}>
     <IoChevronForwardCircleOutline size='6vmin' />
    </IconButton>
   </div>
  </>
 );
};

export default AddNewClientBody;
