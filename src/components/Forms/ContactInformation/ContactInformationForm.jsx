import React from "react";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

const ContactInformationForm = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Contact Information</legend>
   <div className='container-fluid justify-content-between my-3 p-0'>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='f_name' label='First Name' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='m_name' label='Middle Name' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='l_name' label='Last Name' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-8 mb-3'>
      <TextField size='small' className='w-100' id='s_address' label='Street Address' variant='outlined' />
     </div>
     <div className='col-4 mb-3'>
      <TextField size='small' className='w-100' id='city' label='City' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='f_name' label='Province' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='m_name' label='Country' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='l_name' label='Phone Number' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-12 col-md-8'>
      <TextField size='small' className='w-100' id='s_address' label='Email' variant='outlined' />
     </div>
     <div className='col-4 col-md-2'>
      <FormControlLabel control={<Checkbox color='primary' inputProps={{ "aria-label": "secondary checkbox" }} />} label='Personal' />
     </div>
     <div className='col-4 col-md-2'>
      <FormControlLabel control={<Checkbox color='primary' inputProps={{ "aria-label": "secondary checkbox" }} />} label='Business' />
     </div>
    </div>
   </div>
  </>
 );
};

export default ContactInformationForm;
