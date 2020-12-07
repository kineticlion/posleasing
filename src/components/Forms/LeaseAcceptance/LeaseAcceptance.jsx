import React, { useState } from "react";
import { Button } from "@material-ui/core";
import LeaseAcceptanceSignatureModal from "./Signature/LeaseSignatureModal";
import PersonalGauranteeModal from "./Signature/PersonalGaurantee";

const LeaseAcceptance = () => {
 const [open1, setOpen1] = useState(false);
 const [open2, setOpen2] = useState(false);
 const [signature1, setSignature1] = useState(null);
 const [signature2, setSignature2] = useState(null);

 return (
  <div>
   <h1>Lease acceptance</h1>
   <p>
    Undersigned agrees to all terms and conditions contained in this Equipment Lease Agreement. Undersigned hereby authorizes and consents to the collection, use and release of any credit,
    personal or other information about undersigned at any time, from, to or with any credit bureau, reporting agency, credit grantor, or any present or future joint venture partner, party
    to a referral program or alliance, undersigned’s employer or any other person. Undersigned understands that all such information shall be collected and used by Global Leasing Inc.
    Merchant Solutions, its affiliates, business partners and service providers and their respective suc- cessors and assigns for assessing the creditworthiness of the undersigned in
    connection with this Application and the ongoing creditworthiness of the undersigned, for offering other products to undersigned and determining undersigned’s eligibility for any other
    products or services and for other business purposes.
    <br />
    THIS IS A NON-CANCELABLE LEASE FOR THE FULL TERM INDICATED HEREIN.
   </p>
   {signature1 ? <img className='sigImage' alt='signature-1' src={signature1} /> : null}
   <LeaseAcceptanceSignatureModal open={open1} setOpen={setOpen1} setSignature1={setSignature1} />
   <br /> <br />
   <Button variant='contained' color='primary' onClick={() => setOpen1(true)}>
    Open Lease Signature
   </Button>
   <br /> <br />
   <h1>Personal Gaurantee</h1>
   <p>
    Undersigned unconditionally guarantees performance of this Equipment Lease Agreement by Lessee and payment of all sums due thereunder in the event of default, hereby waiving any
    modification, amendment or extension and notice thereof, and further agrees to the terms of this Equipment Lease Agreement insofar as they apply to the undersigned as guarantor.
    Undersigned hereby authorizes and consents to the collection, use and release of any credit, personal or other information about undersigned at any time, from, to or with any credit
    bureau, reporting agency, credit grantor, or any present or future joint venture partner, party to a referral program or alliance, undersigned’s employer or any other person. Undersigned
    understands that all such information shall be collected and used by First Data Canada Merchant Solutions, its affiliates, business partners and service providers and their respective
    successors and assigns for assessing the creditworthiness of the undersigned in connection with this Application and the ongoing creditworthiness of the undersigned, for offering other
    products to Lessee and determining Lessee’s eligibility for any other products or services and for other business purposes.
   </p>
   {signature2 ? <img className='sigImage' alt='signature-2' src={signature2} /> : null} <br />
   <br />
   <PersonalGauranteeModal open={open2} setOpen={setOpen2} setSignature2={setSignature2} />
   <Button variant='contained' color='primary' onClick={() => setOpen2(true)}>
    Open Personal Gaurantee Signature
   </Button>
  </div>
 );
};

export default LeaseAcceptance;
