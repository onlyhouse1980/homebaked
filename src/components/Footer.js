import React from 'react';
import { MDBIcon, MDBContainer, MDBFooter } from 'mdbreact';
import styles from '../styles/Home.module.css'

const FooterPage = () => {
  return (
    <div className={styles.footer}>
    &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <img src="/anewshade.png" alt="aNewShade Logo" className={styles.logo} /></a>
    </div>
  );
};

export default FooterPage;
