import styles from '../styles/Home.module.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
     <Header/>
     <Footer/>
    </div>
  )
}
