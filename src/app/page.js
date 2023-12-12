import Image from 'next/image'
import styles from './page.module.css'
import Header from 'components/Header.js'
import Home from 'components/Home.js'
import FAQ from 'components/FAQ.js'
import Card from 'components/AllCard.js'
import Footer from 'components/Footer.js'

function Page() {
  return (
    <div className={styles.HomePage}>
      <Header/>
      <Home/>
      <Card/>
      <FAQ/>
      <Footer/>    
    </div>
  )
}
export default Page
