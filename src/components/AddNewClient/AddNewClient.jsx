import React from "react";
import AddNewClientModal1 from "./Pages/Page1/AddNewClientModal1";
import AddNewClientModal2 from "./Pages/Page2/AddNewClientModal2";
import AddNewClientModal3 from "./Pages/Page3/AddNewClientModal3";
import AddNewClientButton from "./AddNewClientButton";

const AddNewClient = () => {
 const [open1, setOpen1] = React.useState(false);
 const [open2, setOpen2] = React.useState(false);
 const [open3, setOpen3] = React.useState(false);

 return (
  <>
   <AddNewClientButton setOpen={setOpen1} />
   <AddNewClientModal1 open={open1} setOpen={setOpen1} next={setOpen2} />
   <AddNewClientModal2 open={open2} setOpen={setOpen2} next={setOpen3} />
   <AddNewClientModal3 open={open3} setOpen1={setOpen1} setOpen2={setOpen2} setOpen3={setOpen3} />
  </>
 );
};

export default AddNewClient;
