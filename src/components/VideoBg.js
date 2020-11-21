import styles from './VideoBg.module.css'

const VideoBg = () => {
  return (

<div className={styles.fullscreenbg}>
    <video loop muted autoPlay className={styles.fullscreenbg__video}>
        
        <source src="../../videos/water.mp4" type="video/mp4" />
        
    </video>
</div>
  )
}

export default VideoBg