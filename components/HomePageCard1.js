import React from 'react'
import Image from 'next/image'
import style from '/styles/HomePageCard1.css'

function HomePageCard1(props) {
  return (
    <div className="mainPart21">
        <div className="mp21">
          <div className="mp2left1">
            <h1 className="enjoyTV1">{props.TV}</h1>
            <p className="TVdec1">{props.TVdec}</p>
          </div>
          <div className="mp2right1">
          <Image src={props.dec} width={453} height={338}  alt="netflix-logo" id='cardImg1' />
          </div>
        </div>
        {props.children}
    </div>
  )
}

export default HomePageCard1