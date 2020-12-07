import React, { useState } from "react";
import LeaseAcceptanceSignatureModal from "./Signature/LeaseSignatureModal";
import PersonalGauranteeModal from "./Signature/PersonalGaurantee";

const LeaseAcceptance = () => {
 const [open1, setOpen1] = useState(false);
 const [open2, setOpen2] = useState(false);
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
   <LeaseAcceptanceSignatureModal open={open1} setOpen={setOpen1} />
   <button onClick={() => setOpen1(true)}>Open Lease Signature</button>
   <br />
   <br />
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
   <PersonalGauranteeModal open={open2} setOpen={setOpen2} />
   <button onClick={() => setOpen2(true)}>Open Personal Gaurantee Signature</button>
  </div>
 );
};

export default LeaseAcceptance;
