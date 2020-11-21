import ReactImage from '../assets/mdb-react-small.png';
import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/Home.module.css';

const ExecutivePage = () => (
  <>
    <VideoBg1 /> 
    <div className={styles.textbox}>
    <h2 className='text-center'>OBCG<br />Executive Board</h2>
    <p></p>
    </div>
    <div className={styles.divBlock}>
      <div className= {styles.wContainer}><img src="images/team-1.jpg" loading="lazy" width="300" sizes="(max-width: 479px) 150.40625px, 300px" srcSet="images/team-1-p-800.jpeg 800w, images/team-1-p-1080.jpeg 1080w, images/team-1.jpg 1524w" alt="" className="image-3" />
        <div className={styles.textbox}><p>Jim Farrell<br />President</p></div>
      </div>
      <div className= {styles.wContainer}><img src="images/team-2.jpg" loading="lazy" width="300" alt="" className="image-4" />
        <div className={styles.textbox}><p>Erika Aust<br />Vice President</p></div>
      </div>
      <div className= {styles.wContainer}><img src="images/team-3.jpg" loading="lazy" width="300" sizes="(max-width: 479px) 255.765625px, 300px" srcSet="images/team-3-p-500.jpeg 500w, images/team-3.jpg 1524w" alt="" className="image-5" />
        <div className={styles.textbox}>James Loder<br />Secretary/Treasurer</div>
      </div>
    </div>
  </>
);

export default ExecutivePage;