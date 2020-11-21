import Carousel from '../components/Carousel';
import ReactImage from '../assets/mdb-react-small.png';
import VideoBg from '../components/VideoBg';
import styles from '../styles/Home.module.css'

const WelcomePage = () => (
  <>
    <VideoBg />
    <div className={styles.textbox}>
      <h3 className='text-center'>Orchard Beach <br />Community Group</h3>
    </div>
    <Carousel />
  </>
);

export default WelcomePage;
