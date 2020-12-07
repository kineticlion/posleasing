import React from "react";
import { TextField } from "@material-ui/core";
const SearchBar = props => {
 return (
  <form noValidate autoComplete='off'>
   <div className='d-flex align-items-center justify-content-end'>
    <TextField className='w-100' id='outlined-basic' variant='outlined' size='small' label='Search' {...props}></TextField>
   </div>
  </form>
 );
};

export default SearchBar;
