import React from "react";
import styled from "styled-components";

import DashboardHeader from "./Header/DashboardHeader";
import DashboardBody from "./Body/DashboardBody";

const Dashboard = () => {
 return (
  <Style>
   <div className='container-fluid p-0 px-md-4'>
    <DashboardHeader />
    <DashboardBody />
   </div>
  </Style>
 );
};

const Style = styled.div``;

export default Dashboard;
