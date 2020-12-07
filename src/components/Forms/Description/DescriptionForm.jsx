import React from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
 formControl: {
  minWidth: "100%",
 },
 selectEmpty: {
  marginTop: theme.spacing(2),
 },
}));

const DescriptionForm = () => {
 const classes = useStyles();
 const [equipment, setEquipment] = React.useState("");

 const handleChange = event => {
  setEquipment(event.target.value);
 };
 return (
  <>
   <div className='d-flex justify-content-between flex-column'>
    <legend style={{ fontSize: "3.5vmin" }}>Description of Leased Equipment</legend>
    <FormControl size='small' variant='outlined' className='w-50 p-0'>
     <InputLabel id='demo-simple-select-outlined-label'>Choose Provider</InputLabel>
     <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={equipment} onChange={handleChange} label='Equipment Type'>
      <MenuItem value={10}>Global Data</MenuItem>
      <MenuItem value={20}>First Source</MenuItem>
     </Select>
    </FormControl>
   </div>

   <div className='container-fluid justify-content-between my-3 p-0'>
    <div className='row w-100'>
     <div className='col-md-4 mb-3 w-100'>
      <FormControl size='small' variant='outlined' className={classes.formControl}>
       <InputLabel id='demo-simple-select-outlined-label'>Equipment Type</InputLabel>
       <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={equipment} onChange={handleChange} label='Equipment Type'>
        <MenuItem value={10}>Equipment 1</MenuItem>
        <MenuItem value={20}>Equipment 2</MenuItem>
        <MenuItem value={30}>Equipment 3</MenuItem>
       </Select>
      </FormControl>
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' type='number' id='m_name' label='Quantity' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='l_name' type='number' label='Unit Price w/o Tax' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3 w-100'>
      <FormControl size='small' variant='outlined' className={classes.formControl}>
       <InputLabel id='demo-simple-select-outlined-label'>Equipment Type</InputLabel>
       <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={equipment} onChange={handleChange} label='Equipment Type'>
        <MenuItem value={10}>Equipment 1</MenuItem>
        <MenuItem value={20}>Equipment 2</MenuItem>
        <MenuItem value={30}>Equipment 3</MenuItem>
       </Select>
      </FormControl>
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' type='number' id='m_name' label='Quantity' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='l_name' type='number' label='Unit Price w/o Tax' variant='outlined' />
     </div>
    </div>
    <div className='row w-100'>
     <div className='col-md-4 mb-3 w-100'>
      <FormControl size='small' variant='outlined' className={classes.formControl}>
       <InputLabel id='demo-simple-select-outlined-label'>Equipment Type</InputLabel>
       <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={equipment} onChange={handleChange} label='Equipment Type'>
        <MenuItem value={10}>Equipment 1</MenuItem>
        <MenuItem value={20}>Equipment 2</MenuItem>
        <MenuItem value={30}>Equipment 3</MenuItem>
       </Select>
      </FormControl>
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' type='number' id='m_name' label='Quantity' variant='outlined' />
     </div>
     <div className='col-md-4 mb-3'>
      <TextField className='w-100' size='small' id='l_name' type='number' label='Unit Price w/o Tax' variant='outlined' />
     </div>
    </div>
   </div>
  </>
 );
};

export default DescriptionForm;
