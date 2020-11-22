import ReactImage from '../assets/mdb-react-small.png';
import VideoBg2 from '../components/VideoBg2';
import styles from '../styles/executive.module.css';

const Executive = () => (
  <>
    <VideoBg2 /> 
    <div className={styles.textbox}>
    <h2 className='text-center'><b>OBCG</b><br /><b>Executive Board</b></h2>
    <p></p>
    </div>
    <div className={styles.divBlock}>
      <div className= {styles.content}><img src="images/team-1.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>Jim Farrell<br />President</p></div>
      </div>
      <div className= {styles.content}><img src="images/team-2.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>Erika Aust<br />Vice President</p></div>
      </div>
      <div className= {styles.content}><img src="images/team-3.jpg" loading="lazy" width="300" alt="Member Photo" className={styles.Image5} />
        <div className={styles.content}><p>James Loder<br />Secretary/Treasurer</p></div>
      </div>
    </div>
  </>
);

export default Executive;