import React from "react";
import styled from "styled-components";
import { CircularProgress, IconButton, TextField } from "@material-ui/core";
import { IoLogInOutline } from "react-icons/io5";

const LoginForm = ({ onSubmit: handleSubmit, loading }) => {
 return (
  <Styles>
   <div className='container justify-content-center d-flex align-items-center'>
    <form className='d-flex flex-column w-50' onSubmit={handleSubmit} noValidate autoComplete='off'>
     <TextField className='my-2' id='username' label='Username' />
     <TextField type='password' className='my-2' id='password' label='Password' />
     <div className='d-flex justify-content-center'>
      {!loading ? (
       <IconButton type='submit' style={{ outline: "none", backgroundColor: "transparent" }}>
        <IoLogInOutline size='7vmin' className='icon' />
       </IconButton>
      ) : (
       <CircularProgress className='mt-4' size='7vmin' style={{ color: "#003273" }} />
      )}
     </div>
    </form>
   </div>
  </Styles>
 );
};

const Styles = styled.div`
 width: 100%;

 .icon {
  outline: 0;
  color: #003273;
  &:hover {
   color: #0275d8;
  }
 }
`;

export default LoginForm;
