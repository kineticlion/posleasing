import React from "react";
import { TextField } from "@material-ui/core";

const BusinessInformationForm = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Business Information</legend>
   <div className='container-fluid justify-content-between my-3 p-0'>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_name' label='Business Name' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_store_number' label='Store Number' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_neq' label='NEQ' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField size='small' className='w-100' id='b_bda_name' label='BDA Name' variant='outlined' />
     </div>
     <div className='col-md-8 mb-3'>
      <TextField size='small' className='w-100' id='b_street' label='Street Number and Address' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_province' label='Province' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_country' label='Country' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_city' label='City' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-6 mb-3'>
      <TextField className='w-100' size='small' id='b_email' label='Email' variant='outlined' />
     </div>
     <div className='col-8 col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_number' label='Business Number' variant='outlined' />
     </div>
     <div className='col-4 col-md-2 mb-3'>
      <TextField className='w-100' size='small' id='b_ext' label='Ext' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_type' label='Type of Business' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_merchant_category_code' label='Merchant Category Code' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_fax' label='Fax Number' variant='outlined' />
     </div>
    </div>

    <div className='row w-100'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_website' label='Business Website' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_statement_deliver' label='Statement Delivery' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='b_date_start' label='Month/Year Started' variant='outlined' />
     </div>
    </div>
   </div>
  </>
 );
};

export default BusinessInformationForm;
