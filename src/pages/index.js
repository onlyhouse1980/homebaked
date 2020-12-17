import Carousel from '../components/Carousel';
import ReactImage from '../assets/mdb-react-small.png';
import VideoBg from '../components/VideoBg';
import styles from '../styles/WelcomePage.module.css'

const WelcomePage = () => (
  <>
    <VideoBg />
    <div className={styles.textbox}>
      <h3 className={styles.textCenter}>Orchard Beach <br />Community Group</h3>
    </div>
    <Carousel />
  </>
);

export default WelcomePage;

