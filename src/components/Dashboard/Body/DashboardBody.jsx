import React from "react";

import SearchBar from "./SearchBar";
import RecentActivity from "./RecentActivity";
import PendingFiles from "./PendingFiles";
import Leads from "./Leads";
import ClosedWonLeads from "./ClosedWonLeads";

const DashboardBody = () => {
 return (
  <div className='container-fluid p-0 my-2 mb-3 p-md-4'>
   <SearchBar
    onChange={e => {
     e.preventDefault();
     console.log(e.target.value);
    }}
    // onRequestSearch={() => console.log("onRequestSearch")}
    style={{
     width: "100%",
    }}
   />
   <div className='w-100 d-flex justify-content-center p-0'>
    {/* Row 1 */}
    <div className='row w-100 d-flex'>
     <div className='col-12 col-md-12 col-lg-12 col-xl-5 px-0 pt-4'>
      <RecentActivity />
     </div>
     <div className='col-1'></div>
     <div className='col-12 col-md-12 col-lg-12 col-xl-6 px-0 pt-4'>
      <PendingFiles />
     </div>
    </div>
   </div>

   <div className='w-100 d-flex justify-content-center'>
    {/* Row 2 */}
    <div className='row w-100 d-flex'>
     <div className='col-12 px-0 pt-4'>
      <Leads />
     </div>
     <div className='col-12 px-0 pt-4'>
      <ClosedWonLeads />
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardBody;
