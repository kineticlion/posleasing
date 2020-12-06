import React from "react";
import AddNewClientModal from "./AddNewClientModal";
import AddNewClientButton from "./AddNewClientButton";

const AddNewClient = () => {
 const [open, setOpen] = React.useState(false);

 return (
  <>
   <AddNewClientButton setOpen={setOpen} />
   <AddNewClientModal open={open} setOpen={setOpen} />
  </>
 );
};

export default AddNewClient;
