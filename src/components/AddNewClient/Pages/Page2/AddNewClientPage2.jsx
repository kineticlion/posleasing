import React from "react";
import CommentaryForm from "../../../Forms/Commentary/CommentaryForm";
import DescriptionForm from "../../../Forms/Description/DescriptionForm";
import ScheduleOfPaymentsForm from "../../../Forms/ScheduleOfPayments/ScheduleOfPaymentsForm";

const AddNewClientPage2 = () => {
 return (
  <div className='p-2'>
   <DescriptionForm />
   <ScheduleOfPaymentsForm />
   <CommentaryForm />
  </div>
 );
};

export default AddNewClientPage2;
