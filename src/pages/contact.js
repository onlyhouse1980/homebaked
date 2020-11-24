import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/Contact.module.css'

const Contact = () => (
  <>
    <VideoBg1 />
    <div className={styles.content}>
      <h2 className='textCenter'>Orchard Beach Established 1954</h2>
      <img src="images/fullsmall.png" loading="lazy" height="" sizes="90vw" srcSet="images/fullsmall-p-500.png 500w, images/fullsmall-p-800.png 800w, images/fullsmall-p-1080.png 1080w, images/fullsmall-p-1600.png 1600w, images/fullsmall.png 1920w" alt="" />
      <div className="textCenter">
        <h3>OBCG</h3>
        <p>Orchard Beach<br /> Grapeview, WA 98546<br /><br />
          <strong>Email: </strong><a href="mailto:orchardwater@yahoo.com">orchardwater@yahoo.com</a>
        </p>
      </div>
    </div>
  </>
);

export default Contact;