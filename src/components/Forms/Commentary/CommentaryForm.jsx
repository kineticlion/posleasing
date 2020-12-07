import React from "react";
import { TextField } from "@material-ui/core";

const CommentaryForm = () => {
 return (
  <>
   <legend style={{ fontSize: "3.5vmin" }}>Commentary</legend>
   <TextField className='w-100' id='commentary' label='Any excess information to be provided' multiline rows={7} variant='outlined' />
  </>
 );
};

export default CommentaryForm;
