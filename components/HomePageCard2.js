import React from 'react'
import Image from 'next/image'
import stylecard2 from '/styles/HomePageCard2.css'

function HomePageCard2(props) {
  return (
    <div className="mainPart2">
        <div className="mp2">
          <div className="mp2right">
            <Image src={props.dec} width={450} height={320}  alt="netflix-logo" id='cardImg' />
            {props.children}
          </div>
          <div className="mp2left">
            <h1 className="enjoyTV">{props.TV}</h1>
            <p className="TVdec">{props.TVdec}</p>
          </div>
        </div>
    </div>
  )
}

export default HomePageCard2;