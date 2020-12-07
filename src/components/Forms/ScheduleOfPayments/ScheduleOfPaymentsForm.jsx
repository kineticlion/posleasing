import React from "react";
import { InputAdornment, FormControl, InputLabel, OutlinedInput, TextField, FormHelperText, FormControlLabel, Checkbox } from "@material-ui/core";

const ScheduleOfPayments = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Schedule of Payments</legend>
   <div className='container-fluid justify-content-between my-3 p-0'>
    <div className='row'>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='f_name' label='Lease Term/Month' variant='outlined' />
     </div>
     <div className='col-md-5 col-lg-3 mb-3'>
      <FormControl className='w-100' variant='outlined' size='small'>
       <InputLabel htmlFor='outlined-adornment-amount'>Total Monthly Lease Charge</InputLabel>
       <OutlinedInput
        type='number'
        inputProps={{
         "aria-label": "weight",
        }}
        id='outlined-adornment-amount'
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        labelWidth={200}
       />
       <FormHelperText id='outlined-weight-helper-text'>Total Charge Without Tax</FormHelperText>
      </FormControl>
     </div>
    </div>
    <div className='row'>
     <div className='col-12 d-flex align-items-center'>
      <InputLabel className='mr-4'>Additional Provisions </InputLabel>
     </div>
     <div className='col-12'>
      <FormControlLabel control={<Checkbox color='primary' />} label='Equipment Service Program' />
     </div>
    </div>
   </div>
  </>
 );
};

export default ScheduleOfPayments;
