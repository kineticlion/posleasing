import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoChevronForwardCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@material-ui/core";
import AddNewClient from "./AddNewClient";

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

export default function TransitionsModal() {
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
  setOpen(true);
 };

 return (
  <>
   <StyledLink>
    <Tooltip title='Add New Client'>
     <IconButton style={{ outline: "none" }} edge='end' onClick={handleOpen}>
      <IoAddCircleOutline size='6.5vmin' className='icon' />
     </IconButton>
    </Tooltip>
   </StyledLink>
   <AddNewClient open={open} setOpen={setOpen} />
  </>
 );
}

const StyledLink = styled(Link)`
 color: #003273;
 &:hover {
  color: #003273;
 }
`;

const Style = styled.div`
 .icon {
  color: #003273;
  font-size: "7vmin";
  &:hover {
   color: #0275d8;
  }
 }
`;
