import { Modal } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";
import style from "./style.css";

class LeaseAcceptanceSignatureModal extends Component {
 constructor(props) {
  super(props);
 }
 state = { trimmedDataURL: null };
 sigPad = {};
 clear = () => {
  this.sigPad.clear();
 };
 trim = () => {
  this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png") });
 };
 render() {
  let { trimmedDataURL } = this.state;
  console.log(this.props);
  return (
   <Modal open={this.props.open} onClose={() => this.props.setOpen(false)}>
    <div className='container'>
     <div className='sigContainer'>
      <SignaturePad
       canvasProps={{ className: "sigPad" }}
       ref={ref => {
        this.sigPad = ref;
       }}
      />
     </div>
     <div>
      <button className='buttons' onClick={this.clear}>
       Clear
      </button>
      <button className={"buttons"} onClick={this.trim}>
       Save
      </button>
     </div>
     {trimmedDataURL ? <img className='sigImage' src={trimmedDataURL} /> : null}
    </div>
   </Modal>
  );
 }
}

export default LeaseAcceptanceSignatureModal;
