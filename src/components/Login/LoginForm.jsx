import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const LoginForm = ({ onSubmit: handleSubmit, loading }) => {
 return (
  <Styles>
   <div className='container justify-content-center d-flex align-items-center'>
    <form onSubmit={handleSubmit} className='w-50' autoComplete='off'>
     <div className='form-group'>
      <input type='email' className='form-control input-lg' id='exampleInputEmail1' placeholder='Username' />
     </div>
     <div className='form-group'>
      <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
     </div>
     <div className='d-flex justify-content-center'>
      {!loading ? (
       <button type='submit' className='btn btn-primary btn-md'>
        Login
       </button>
      ) : (
       <CircularProgress style={{ color: "#003273" }} />
      )}
     </div>
    </form>
   </div>
  </Styles>
 );
};

const Styles = styled.div`
 width: 100%;
 input {
  text-align: center;
 }

 button {
  background-color: #003273;
  outline: 0;
  border: 0;
  &:hover {
   background-color: #0275d8;
  }
 }
`;

export default LoginForm;
