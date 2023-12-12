import React from 'react'
import style from '/styles/Header.css'
import Image from 'next/image'


function NefHeader() {
  return (
    <div id='header'>
        <div id="logo"><Image src='/netflix-logo.png' width={100} height={1} id='nlogo' alt="netflix-logo" /></div>
        
    </div>
  )
}

export default NefHeader;