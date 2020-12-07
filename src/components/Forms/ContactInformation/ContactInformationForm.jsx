import React from "react";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

const ContactInformationForm = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Contact Information</legend>
   <div className='container-fluid justify-content-between my-3 p-0'>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_first_name' label='First Name' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_middle_name' label='Middle Name' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_last_name' label='Last Name' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-8 mb-3'>
      <TextField size='small' className='w-100' id='contact_street_address' label='Street Address' variant='outlined' />
     </div>
     <div className='col-4 mb-3'>
      <TextField size='small' className='w-100' id='contact_city' label='City' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_province' label='Province' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_country' label='Country' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='contact_phone_number' label='Phone Number' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-12 col-md-8'>
      <TextField size='small' className='w-100' id='contact_email' label='Email' variant='outlined' />
     </div>
     <div className='col-4 col-md-2'>
      <FormControlLabel id='contact_personal_check' control={<Checkbox color='primary' inputProps={{ "aria-label": "secondary checkbox" }} />} label='Personal' />
     </div>
     <div className='col-4 col-md-2'>
      <FormControlLabel id='contact_personal_check' control={<Checkbox color='primary' inputProps={{ "aria-label": "secondary checkbox" }} />} label='Business' />
     </div>
    </div>
   </div>
  </>
 );
};

export default ContactInformationForm;
