import React, { useState } from "react";
import LeaseAcceptanceSignatureModal from "./Signature/LeaseSignatureModal";
import PersonalGauranteeModal from "./Signature/PersonalGaurantee";

const LeaseAcceptance = () => {
 const [open1, setOpen1] = useState(false);
 const [open2, setOpen2] = useState(false);
 return (
  <div>
   <h1>Lease acceptance</h1>
   <LeaseAcceptanceSignatureModal open={open1} setOpen={setOpen1} />
   <button onClick={() => setOpen1(true)}>Open Lease Signature</button>
   <h1>Personal Gaurantee</h1>
   <PersonalGauranteeModal open={open2} setOpen={setOpen2} />
   <button onClick={() => setOpen2(true)}>Open Personal Gaurantee Signature</button>
  </div>
 );
};

export default LeaseAcceptance;
