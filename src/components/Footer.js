import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from 'mdbreact';
import styles from '../styles/Home.module.css'

const FooterPage = () => {
  return (
    <MDBFooter
      color='blue'
      className='font-small py-3 mt-4 footer-copyright text-center'
    >
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <img src="/anewshade.png" alt="aNewShade Logo" className={styles.logo} /></a>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
