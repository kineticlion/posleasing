import React from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";
import { IoMenuSharp, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AddNewClient from "../../AddNewClient/AddNewClient";

export default function DashboardMenu() {
 const [anchorEl, setAnchorEl] = React.useState(null);

 const handleClick = event => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <Style>
   <AddNewClient />

   <Tooltip title='Menu'>
    <IconButton style={{ outline: "none" }} aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
     <IoMenuSharp className='icon' size='7vmin' />
    </IconButton>
   </Tooltip>
   <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem onClick={handleClose}>Client Report</MenuItem>
    <MenuItem onClick={handleClose}>Pipeline</MenuItem>
    <MenuItem onClick={handleClose}>Forms</MenuItem>
    <MenuItem onClick={handleClose}>Calendar</MenuItem>
    <MenuItem onClick={handleClose}>Reports</MenuItem>
    <MenuItem onClick={handleClose}>Inquiries</MenuItem>
   </Menu>

   <StyledLink to='/'>
    <Tooltip title='Logout'>
     <IconButton style={{ outline: "none" }} edge='end'>
      <IoLogOutOutline size='7vmin' className='icon' />
     </IconButton>
    </Tooltip>
   </StyledLink>
  </Style>
 );
}

const Style = styled.div`
 .icon {
  color: #003273;
  font-size: "7vmin";
  &:hover {
   color: #0275d8;
  }
 }
`;

const StyledLink = styled(Link)`
 color: #003273;
 &:hover {
  color: #003273;
 }
`;
