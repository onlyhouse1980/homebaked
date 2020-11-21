import styles from './VideoBg1.module.css'

const VideoBg1 = () => {
  return (

<div className={styles.fullscreenbg}>
    <video loop muted autoPlay className={styles.fullscreenbg__video}>
        
        <source src="../../videos/flowing-water-transcode.mp4" type="video/mp4" />
        
    </video>
</div>
  )
}

export default VideoBg1