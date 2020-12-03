import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../common/Logo";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";

const Login = () => {
 const [loading, setLoading] = useState(false);

 const history = useHistory();
 const handleSubmit = e => {
  e.preventDefault();
  setLoading(true);
  setTimeout(() => {
   return history.replace("/dashboard");
  }, 1000);
 };

 return (
  <Styles>
   <div className='container login-container'>
    <Logo classes='logo mb-5' />
    <LoginForm loading={loading} onSubmit={handleSubmit} />
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
