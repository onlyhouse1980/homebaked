import React from 'react'
import styles from './MyFooter.module.css'

const FooterPage = () => {
  return (
      <div className=(styles.myfooter)>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <img src="/anewshade.png" alt="aNewShade Logo" className={styles.logo} /></a>
      </div>