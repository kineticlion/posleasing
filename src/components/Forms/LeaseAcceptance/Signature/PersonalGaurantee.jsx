import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import { Modal, Button } from "@material-ui/core";
import "./style.css";

class PersonalGauranteeModal extends Component {
 state = { trimmedDataURL: null };
 sigPad = {};
 clear = () => {
  this.sigPad.clear();
 };
 trim = () => {
  this.props.setSignature2(this.sigPad.getTrimmedCanvas().toDataURL("image/png"));
 };
 render() {
  return (
   <Modal open={this.props.open} onClose={() => this.props.setOpen(false)}>
    <div className='container-modal'>
     <div className='sigContainer'>
      <SignaturePad
       canvasProps={{ className: "sigPad" }}
       ref={ref => {
        this.sigPad = ref;
       }}
      />
     </div>
     <div>
      <Button title='Clear' variant='contained' color='primary' className='buttons-modal' onClick={this.clear}>
       Clear
      </Button>
      <Button variant='contained' color='primary' className='buttons-modal' onClick={this.trim}>
       Save
      </Button>
      <Button variant='contained' color='primary' className='buttons-modal' onClick={() => this.props.setOpen(false)}>
       Close
      </Button>
     </div>
    </div>
   </Modal>
  );
 }
}

export default PersonalGauranteeModal;
