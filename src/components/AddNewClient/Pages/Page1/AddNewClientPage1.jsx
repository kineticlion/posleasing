import React from "react";
import ContactInformationForm from "../../../Forms/ContactInformation/ContactInformationForm";
import BusinessInformationForm from "../../../Forms/BusinessInformation/BusinessInformationForm";
import IdentificationForm from "../../../Forms/Identification/IdentificationForm";

const AddNewClientPage1 = () => {
 return (
  <div className='p-2'>
   <ContactInformationForm />
   <BusinessInformationForm />
   <IdentificationForm />
  </div>
 );
};

export default AddNewClientPage1;
