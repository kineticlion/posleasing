import React from "react";
import logo from "../../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import LoginForm from "./LoginForm";

const Login = () => {
 const handleSubmit = e => {
  e.preventDefault();
  console.log("Form Submitted");
 };

 return (
  <Styles>
   <div className='container login-container'>
    <img src={logo} alt='Logo' className='logo mb-5' />
    <LoginForm onSubmit={handleSubmit} />
   </div>
  </Styles>
 );
};

const Styles = styled.div`
 background: linear-gradient(180deg, rgba(255, 255, 255, 1) 37%, rgba(0, 50, 115, 1) 100%);

 .login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
 }

 .logo {
  width: auto;
  height: 15vmin;
 }
`;

export default Login;
