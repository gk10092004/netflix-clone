'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


function Redbtn(props) {
  const [btnName,setBtnName]=useState("Get Started");
  const [readyWatch, setReadyWatch]=useState("Ready to watch? Enter your email to create or restart your membership.")
  function ChangeB(){
    setBtnName("Finish Sign Up");
    setReadyWatch("");
  }
  return (
    <div className="btnfsu">
      <div className="extra exContant">
        {readyWatch}
      </div>
      <div className="extra exData">
        <input type="email" id="email"  placeholder='Email address' />
        <Link href="/loginSt1"><button className="fsu" onClick={ChangeB} >{btnName} <Image src="/next.png" width={25} height={20} alt="next" /> </button></Link>
      </div>
    </div>
  )
}

export default Redbtn