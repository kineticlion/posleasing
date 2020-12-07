import React from "react";
import { TextField } from "@material-ui/core";

const IdentificationForm = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Identification</legend>
   <div className='container-fluid d-flex flex-column justify-content-between my-3 p-0'>
    <div className='row d-flex flex-column w-100'>
     <div className='col-12 mb-3'>
      <TextField className='w-100' size='small' id='identification_type1' label='Identification Type 1' variant='outlined' />
     </div>
     <div className='d-flex'>
      <div className='col-7 mb-3'>
       <TextField size='small' className='w-100' id='identification_type1_number' type='number' label='Identification Number' variant='outlined' />
      </div>
      <div className='col-5 mb-3'>
       <TextField size='small' className='w-100' id='identification_date1' label='Date Picker' variant='outlined' />
      </div>
     </div>
     <div className='col-12 mb-3'>
      <TextField className='w-100' size='small' id='identification_type1_attachment' label='Attachment' variant='outlined' />
     </div>
    </div>
    <div className='row d-flex flex-column w-100 mt-4'>
     <div className='col-12 mb-3'>
      <TextField className='w-100' size='small' id='identification_type2' label='Identification Type 2' variant='outlined' />
     </div>
     <div className='d-flex'>
      <div className='col-7 mb-3'>
       <TextField size='small' className='w-100' id='identification_type2_number' type='number' label='Identification Number' variant='outlined' />
      </div>
      <div className='col-5 mb-3'>
       <TextField size='small' className='w-100' id='identification_date2' label='Date Picker' variant='outlined' />
      </div>
     </div>
     <div className='col-12 mb-3'>
      <TextField className='w-100' size='small' id='identification_type2_attachment' label='Attachment' variant='outlined' />
     </div>
    </div>
   </div>
  </>
 );
};

export default IdentificationForm;
