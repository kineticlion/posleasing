import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = props => {
 return (
  <form noValidate autoComplete='off'>
   <TextField id='outlined-basic' variant='outlined' size='small' label='Search' {...props} />
  </form>
 );
};

export default SearchBar;
