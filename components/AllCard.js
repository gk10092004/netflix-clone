import React from 'react'
import Image from 'next/image'
import Card1 from 'components/HomePageCard1.js'
import Card2 from 'components/HomePageCard2.js'
import style from '/styles/AllCard.css'

function AllCard() {
    const data =[
        {
          hName:"Enjoy on your TV",
          cName:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
          iLink:"/ig1-tv.png"
        },
        {
          hName:"Download your shows to watch offline",
          cName:"Save your favourites easily and always have something to watch.",
          iLink:"/ig2-mobile-0819.jpg"
        },
        {
          hName:"Watch everywhere",
          cName:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
          iLink:"/ig3-device-pile-in.png"
        },
        {
          hName:"Create profiles for kids",
          cName:"Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
          iLink:"/ig4-children.png"
        }
      ];
  return (
    <div>
    <Card1 TV={data[0].hName} TVdec={data[0].cName} dec={data[0].iLink} >
      <video src="/vdo1.m4v" autoPlay muted loop playsInline id='vdo1'></video>
    </Card1>
    <Card2 TV={data[1].hName} TVdec={data[1].cName} dec={data[1].iLink} >
      <div id='thingBox'>
        <Image src="/boxshot.png" alt="boxshot"  width={50} height={70}/>
        <div id='textThingBox'>
          <h5 id='textThing'>Stranger <br />Things</h5>
          <p>Downloading...</p>
        </div>
        <Image src="/boxshotR.png" alt="boxshot"  width={40} height={50}/>
      </div>
    </Card2>
    <Card1 TV={data[2].hName} TVdec={data[2].cName} dec={data[2].iLink} >
      <video src="/vdo2.m4v" autoPlay muted loop playsInline id='vdo2'></video>
    </Card1>
    <Card2 TV={data[3].hName} TVdec={data[3].cName} dec={data[3].iLink} ></Card2>
    </div>
  )
}

export default AllCard