import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IconButton, Tooltip } from "@material-ui/core";

export default function TransitionsModal({ setOpen }) {
 const handleOpen = () => {
  setOpen(true);
 };

 return (
  <>
   <Tooltip title='Add New Client'>
    <IconButton style={{ outline: "none" }} edge='end' onClick={handleOpen}>
     <IoAddCircleOutline size='6.5vmin' className='icon' />
    </IconButton>
   </Tooltip>
  </>
 );
}
