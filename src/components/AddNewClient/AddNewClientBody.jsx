import React from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";

import ContactInformationForm from "../Forms/ContactInformation/ContactInformationForm";
import BusinessInformationForm from "../Forms/BusinessInformationForm/BusinessInformationForm";
import IdentificationForm from "../Forms/IdentificationForm/IdentificationForm";

const AddNewClientBody = ({ onClose }) => {
 const handleNext = () => {
  console.log("Next");
  onClose();
 };
 return (
  <div className='p-2'>
   <ContactInformationForm />
   <BusinessInformationForm />
   <IdentificationForm />
   {/*FORM END*/}
   <div className='d-flex justify-content-end'>
    <IconButton onClick={handleNext} style={{ outline: 0 }}>
     <IoChevronForwardCircleOutline size='6vmin' />
    </IconButton>
   </div>
  </div>
 );
};

export default AddNewClientBody;
