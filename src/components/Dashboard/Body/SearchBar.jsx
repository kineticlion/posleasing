import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = props => {
 return (
  <form noValidate autoComplete='off'>
   <TextField id='outlined-basic' variant='outlined' placeholder='Search' {...props} />
  </form>
 );
};

export default SearchBar;
