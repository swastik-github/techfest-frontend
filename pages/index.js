import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import classes from '../components/header/header.module.css'
import Slider from '../components/slider/Slider'
export default function Home() {
  return (
    <div className={styles.container}>
     <div className={classes.container02}>
        <h1>
          Tech Fest <span> 2022-23</span>{" "}
        </h1>
      </div>
      <Slider />
      <div style={{marginBottom:'150px'}} className={classes.sponsors}>
        <h1>Title Sponsors</h1>
      </div>
    </div>
  )
}
