import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput } from "mdbreact";
import { __InputValue } from "graphql";

const y = <a href='/api/person/'></a>
var z = __InputValue
var x = y + z

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
    <a href={z} />
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
    return true
  }
}

render() {
  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-1"><strong>Check Your Water Usage</strong></h2>
      <p className="text-center pb-4">(requires reading your meter.) Learn how to, <a href='#' target="_blank"> Here</a></p><br />
      <MDBStepper icon>
        <MDBStep far icon="folder-open" stepName="Basic Information" onClick={this.swapFormActive(1)(1)}></MDBStep>
        <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(1)(2)}></MDBStep>
      </MDBStepper>

      <form role="form" action="" method="get">
        <MDBRow>
          {this.state.formActivePanel1 == 1 &&
          (<MDBCol md="12">
            <h3 className="font-weight-bold pl-0 my-4">
              <strong>Basic Information</strong></h3>
            <MDBInput id='id' label="Meter Serial # (numbers only)" className="mt-4" autoFocus={this.calculateAutofocus(1)} />
            <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</MDBBtn>
          </MDBCol>)}
        </MDBRow>
      </form>
    </MDBContainer>
    );
  };
}

export default UsageStepper;