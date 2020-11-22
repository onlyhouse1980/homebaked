import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
    <MDBFooter
      color='blue'
      className='font-small py-3 mt-4 footer-copyright text-center'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Powered by:
        <a href='http://anewshade.de'> aNewShade.de</a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
