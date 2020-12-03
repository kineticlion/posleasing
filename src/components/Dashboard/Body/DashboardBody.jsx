import React from "react";

import SearchBar from "./SearchBar";
import Table from "../../common/Table";

const DashboardBody = () => {
 return (
  <div className='container-fluid p-5'>
   <SearchBar
    onChange={e => {
     e.preventDefault();
     console.log(e.target.value);
    }}
    // onRequestSearch={() => console.log("onRequestSearch")}
    style={{
     margin: "0 auto",
     width: "100%",
    }}
   />
   <Table />
  </div>
 );
};

export default DashboardBody;
