import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput } from "mdbreact";

class UsageStepper extends React.Component {

state = {
  formActivePanel1: 1,
  formActivePanel1Changed: false,
}

swapFormActive = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleSubmission = () => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
    return true
  }
}

render() {
  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Check Your Water Usage</strong></h2>
      <p>(requires reading your meter. Learn how, <a href='#' target="_blank"> Here</a>)</p><br />
      <MDBStepper icon>
        <MDBStep far icon="folder-open" stepName="Basic Information" onClick={this.swapFormActive(1)(1)}></MDBStep>
        <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(1)(2)}></MDBStep>
      </MDBStepper>

      <form role="form" action="" method="post">
        <MDBRow>
          {this.state.formActivePanel1 == 1 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Basic Information</strong></h3>
            <MDBInput label="Meter Serial Number" className="mt-4" autoFocus={this.calculateAutofocus(1)} />
            <MDBInput label="Your Meter Reading" className="mt-4" />
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 == 2 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
            <MDBInput label="First Name" className="mt-3" autoFocus={this.calculateAutofocus(1)} />
            <MDBInput label="Second Name" className="mt-3" />
            <MDBInput label="Surname" className="mt-3" />
            <MDBInput label="Address" type="textarea" rows="2" />
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 == 3 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
            <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" autoFocus={this.calculateAutofocus(1)} />
            <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
            <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</MDBBtn>
          </MDBCol>)}

          {this.state.formActivePanel1 == 4 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
            <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
            <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</MDBBtn>
            <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</MDBBtn>
          </MDBCol>)}
        </MDBRow>
      </form>
    </MDBContainer>
    );
  };
}

export default UsageStepper;