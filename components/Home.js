import React from 'react'
import Image from 'next/image'
import style from '/styles/Home.css'
import Redbtn from 'components/Redbtn.js'

function Home() {
  return (
    <div className="mainPage">
      <Image src="/background.jpg" layout='fill' objectFit='cover' alt="bg" className="bg" />
        <div className="contents">
          <p className="wel">Welcome back!</p>
          <h1 className="heading">Laughter. Tears. Thrills. Find it all on <br />Netflix.</h1>
          <p className="price">Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
          <Redbtn/>
        </div>
    </div>
  )
}

export default Home