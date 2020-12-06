import React from "react";
import AddNewClientModal1 from "./AddNewClientModal1";
import AddNewClientModal2 from "./AddNewClientModal2";
import AddNewClientButton from "./AddNewClientButton";

const AddNewClient = () => {
 const [open1, setOpen1] = React.useState(false);
 const [open2, setOpen2] = React.useState(false);
 return (
  <>
   <AddNewClientButton setOpen={setOpen1} />
   <AddNewClientModal1 open={open1} setOpen={setOpen1} next={setOpen2} />
   <AddNewClientModal2 open={open2} setOpen={setOpen2} />
  </>
 );
};

export default AddNewClient;
