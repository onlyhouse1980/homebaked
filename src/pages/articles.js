import ReactImage from '../assets/mdb-react-small.png';
import styles from '../styles/Articles.module.css'
import VideoBg1 from '../components/VideoBg1'

const Articles = () => (
  <>
    <VideoBg1 /> 
    <container className={styles.bgcontainer}>
    <div className={styles.content}>
    <h2 className='text-center'>Articles of Incorporation</h2><br /><br />
    <p><b>FIRST:</b> The name of the corporation is ORCHARD BEACH COMMUNITY GROUP.</p>
‍
<p><b>SECOND:</b> The period of its duration is perpetual.</p>
‍
<p><b>THIRD:</b> The purposes for which this corporation is formed are as follows:
      A) To maintain a community water system and undertake other community projects and activities as decided by the Board of Directors and to promote the general interest and welfare of the Orchard Beach Community.</p>
‍
<p><b>FOURTH:</b> The corporation shall have all powers granted by law necessary and proper to carry out its above-stated purposes consistent with its qualifications under 501 (c) (3).</p>
‍
<p><b>FIFTH:</b> All corporate activities should be governed by the Board of Directors and as provided in the corporate by-laws. Three directors shall constitute a quorum and all decisions shall require the majority vote of the quorum to be binding.</p>
‍
<p><b>SIXTH:</b> In the event of dissolution, the assets of the corporation shall be distributed only to a recipient or recipients, to be selected by the Board of Directors, that would qualify for exemption as an organization described in Section 501(c) (3) of the Internal Revenue Code of 1954, as amended, or a successor statute.</p>
‍
<p><b>SEVENTH:</b> The address of the initial registered office of the corporation is...” Filed with the Secretary of State – August 27, 1974</p>
    </div>
    </container>
  </>
);

export default Articles;