import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const LoginForm = ({ onSubmit: handleSubmit }) => {
 return (
  <Styles>
   <div className='container justify-content-center d-flex align-items-center'>
    <form onSubmit={handleSubmit} className='w-50' autoComplete='off'>
     <div class='form-group'>
      <input type='email' class='form-control input-lg' id='exampleInputEmail1' placeholder='Username' />
     </div>
     <div class='form-group'>
      <input type='password' class='form-control' id='exampleInputPassword1' placeholder='Password' />
     </div>
     <div className='d-flex justify-content-center'>
      <button type='submit' class='btn btn-primary btn-md'>
       Login
      </button>
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
 }
`;

export default LoginForm;
