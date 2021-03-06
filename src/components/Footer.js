import React from 'react'
import styles from '../styles/WelcomePage.module.css'

const FooterPage = () => {
  return (
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <img src="/images/anewshade.png" alt="aNewShade Logo" className={styles.logo} /></a>
      </div>
  );
};

export default FooterPage;
