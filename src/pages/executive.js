import ReactImage from '../assets/mdb-react-small.png';
import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/executive.module.css';

const Executive = () => (
  <>
    <VideoBg1 /> 
    <div className={styles.textbox}>
    <h2 className='text-center'>OBCG<br />Executive Board</h2>
    <p></p>
    </div>
    <div className={styles.divBlock}>
      <div className= {styles.wContainer}><img src="images/team-1.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>Jim Farrell<br />President</p></div>
      </div>
      <div className= {styles.wContainer}><img src="images/team-2.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>Erika Aust<br />Vice President</p></div>
      </div>
      <div className= {styles.wContainer}><img src="images/team-3.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>James Loder<br />Secretary/Treasurer</p></div>
      </div>
    </div>
  </>
);

export default Executive;