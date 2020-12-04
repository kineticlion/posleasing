import React from "react";
import styled from "styled-components";

import Logo from "../../common/Logo";
import DashboardMenu from "./DashboardMenu";

const DashboardHeader = () => {
 return (
  <Style>
   <Logo classes='logo' />
   <div className='d-flex align-items-center justify-content-between'>
    <DashboardMenu />
   </div>
  </Style>
 );
};

const Style = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 2vmin;
 .logo {
  width: auto;
  height: 8vmin;
 }
`;

export default DashboardHeader;
